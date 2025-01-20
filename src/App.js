import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { DataProvider } from "./components/Context";
import Products from "./components/Products";
import Details from "./components/Details";
function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/products" element={<Products/>} />
              <Route path="products/products/:id" element={<Details/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
