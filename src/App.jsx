import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/home";
import Porducts from "./pages/Porducts";
import PageNotFound from "./pages/PageNotFound";
import { DeviceWidthProvider } from "./context/DeviceWidthContext";
import { ShowSideBarProvider } from "./context/ShowSideBar";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import WaitingForConfirm from "./pages/WaitingForConfirm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={false}> */}
          <CartProvider>
            <DeviceWidthProvider>
              <GlobalStyles />
              <ShowSideBarProvider>
                <BrowserRouter>
                  <Routes>
                    <Route element={<AppLayout />}>
                      <Route index element={<Navigate replace to="home" />} />
                      <Route path="home" element={<Home />} />
                      <Route path="products" element={<Porducts />} />
                      <Route path="cart" element={<Cart />} />
                      <Route path="account" element={<Account />} />
                      <Route
                        path="checkout"
                        element={
                          <ProtectedRoute>
                            <Checkout />
                          </ProtectedRoute>
                        }
                      />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route
                      path="/waitingforconfirm"
                      element={<WaitingForConfirm />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </BrowserRouter>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={12}
                  containerStyle={{
                    margin: "8px",
                  }}
                  toastOptions={{
                    success: {
                      duration: 3000,
                    },
                    error: {
                      duration: 5000,
                    },
                    style: {
                      fontSize: "16px",
                      maxWidth: "500px",
                      padding: "16px 24px",
                      backgroundColor: "var(--color-grey-0)",
                      color: "var(--color-grey-700)",
                    },
                  }}
                />
              </ShowSideBarProvider>
            </DeviceWidthProvider>
          </CartProvider>
          {/* </ReactQueryDevtools> */}
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
