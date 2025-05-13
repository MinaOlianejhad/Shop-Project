import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutePage from "./pages/CheckOutePage";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckOutePage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </ProductProvider>
      </CartProvider>
    </>
  );
}

export default App;
