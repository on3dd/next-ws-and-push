import { NextPage, NextComponentType } from 'next';

type AppProps = {
  Component: NextComponentType;
  pageProps: unknown;
};

const App: NextPage<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
