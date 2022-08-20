import {
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import { MuiThemeProvider } from '@mui/material/styles';
import type { AppProps } from "next/app";
import theme from "../theme";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Navbar />
        <Container>
          <Box marginTop={1}>
            <Component {...pageProps} />
          </Box>
        </Container>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}
export default MyApp;