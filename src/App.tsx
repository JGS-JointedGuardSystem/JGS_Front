import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import { globalStyle } from "./styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { theme } from "./styles/Theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
