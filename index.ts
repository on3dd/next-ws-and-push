import Server from './server/server';

import { logger } from './server/shared/Logger';
import AppError from './server/shared/AppError';
import ErrorHandler from './server/shared/ErrorHandler';

const port = Number(process.env.PORT) || 3000;
const dev = String(process.env.NODE_ENV) !== 'production';

const server = Server.getInstance({ dev });
const errorHandler = ErrorHandler.getInstance();

const startServer = async () => {
  await server.prepare();
  await server.start(port);

  logger.info(`Serving at http://localhost:${port}`);
};

const bootstrap = async () => {
  try {
    await startServer();
  } catch (err) {
    throw new AppError('Error starting server', err, false);
  }
};

bootstrap();

(process as NodeJS.EventEmitter).on(
  'unhandledRejection',
  (reason: string) => {
    throw reason;
  },
);

(process as NodeJS.EventEmitter).on(
  'uncaughtException',
  (error: Error) => {
    errorHandler.handleError(error);

    if (!errorHandler.isTrustedError(error)) {
      process.exit(1);
    }
  },
);

// commented due to weird logging behavior
const shutdown = async () => {
  logger.warn(
    'SIGTERM signal received: closing HTTP server',
  );

  await server.close();

  logger.warn('HTTP server closed');
};

(process as NodeJS.EventEmitter).on('SIGTERM', shutdown);
(process as NodeJS.EventEmitter).on('SIGINT', shutdown);
