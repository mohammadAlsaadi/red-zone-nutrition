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
import { ProductsProvider } from "./context/ProductsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false}> */}
        <ProductsProvider>
          <DeviceWidthProvider>
            <DarkModeProvider>
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
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </BrowserRouter>
              </ShowSideBarProvider>
            </DarkModeProvider>
          </DeviceWidthProvider>
        </ProductsProvider>
        {/* </ReactQueryDevtools> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
