import React from 'react';
import { NextComponentType } from 'next';

import '../styles/globals.css';

type AppProps = {
  Component: NextComponentType;
  pageProps: unknown;
};

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
