import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@/styles/index.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute='class' disableTransitionOnChange>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
