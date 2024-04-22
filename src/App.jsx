import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/globalStyles";
import Porducts from "./pages/Porducts";
import PageNotFound from "./pages/PageNotFound";
import { DeviceWidthProvider } from "./context/DeviceWidthContext";
import { ShowSideBarProvider } from "./context/ShowSideBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

// import Account from "./pages/Account";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";

// import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import WaitingForConfirm from "./pages/WaitingForConfirm";
import { ReviewsProvider } from "./context/ReviewsContext";
import { ScrolledProvider } from "./context/ScrolledContext";
import CreditCardPayment from "./pages/CreditCardPayment";
import Categories from "./pages/Categories";
import CalculateCalories from "./pages/CalculateCalories";
import NewInStore from "./pages/NewInStore";
import Orders from "./pages/Orders";
import SpecialOffer from "./pages/SpecialOffer";
import BestSeller from "./pages/BestSeller";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { BodyDirectionProvider } from "./context/BodyDirectionContext";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { ProductSelectionProvider } from "./context/ProductSelectionContext";
import SuccessPayment from "./pages/SuccessPayment";
import { AddressProvider } from "./context/AddressContext";
import SuccessOrder from "./pages/SuccessOrder";

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
      <BodyDirectionProvider>
        <DarkModeProvider>
          <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false}> */}
            <CartProvider>
              <DeviceWidthProvider>
                <GlobalStyles />
                <ProductSelectionProvider>
                  <ShowSideBarProvider>
                    <ReviewsProvider>
                      <ScrolledProvider>
                        <AddressProvider>
                          <BrowserRouter>
                            <Routes>
                              <Route element={<AppLayout />}>
                                <Route
                                  index
                                  element={<Navigate replace to="home" />}
                                />
                                <Route path="home" element={<Home />} />
                                <Route
                                  path="products/:categoryName"
                                  element={<Porducts />}
                                />
                                <Route
                                  path="categories"
                                  element={<Categories />}
                                />
                                <Route
                                  path="calculate-calories"
                                  element={<CalculateCalories />}
                                />
                                <Route
                                  path="special-offer"
                                  element={<SpecialOffer />}
                                />
                                <Route path="about-us" element={<AboutUs />} />
                                <Route
                                  path="contact-us"
                                  element={<ContactUs />}
                                />

                                <Route
                                  path="best-seller"
                                  element={<BestSeller />}
                                />
                                <Route path="cart" element={<Cart />} />
                                <Route
                                  path="details/:productId"
                                  element={<Details />}
                                />
                                <Route path="orders" element={<Orders />} />

                                <Route
                                  path="payment"
                                  element={<CreditCardPayment />}
                                />
                                <Route
                                  path="new-in-store"
                                  element={<NewInStore />}
                                />
                                <Route path="articles" element={<Articles />} />
                                <Route
                                  path="articles/:articleId"
                                  element={<Article />}
                                />

                                <Route
                                  path="checkout"
                                  element={
                                    // <ProtectedRoute>
                                    //   <Checkout />
                                    // </ProtectedRoute>
                                    <Checkout />
                                  }
                                />
                                <Route
                                  path="success-payment"
                                  element={<SuccessPayment />}
                                />
                                <Route
                                  path="success-order"
                                  element={<SuccessOrder />}
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
                        </AddressProvider>
                      </ScrolledProvider>
                    </ReviewsProvider>
                  </ShowSideBarProvider>
                </ProductSelectionProvider>
              </DeviceWidthProvider>
            </CartProvider>
            {/* </ReactQueryDevtools> */}
          </QueryClientProvider>
        </DarkModeProvider>
      </BodyDirectionProvider>
    </>
  );
}

export default App;
