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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
