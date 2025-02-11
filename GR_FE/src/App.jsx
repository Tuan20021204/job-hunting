import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Login from "./features/authentication/Login";
import Register from "./features/authentication/Register";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#2d3758",
    },
    error: {
      main: "rgba(255, 99, 132, 1)",
      // main: "#f44336",
    },
    success: {
      // main: "rgba(75, 192, 192, 1)",
      // main: "#4caf50",
      main: "#00c853",
    },
    warning: {
      // main: "rgba(255, 206, 86, 1)",
      main: "#ff9800",
    },
    info: {
      // main: "rgba(54, 162, 235, 1)",
      main: "#2196f3",
    },

    text: {
      primary: "#333",
    },

    background: {
      default: "#f4f6f8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route>
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
