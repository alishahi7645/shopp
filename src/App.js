import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { DataProvider } from "./components/Context";
import Products from "./components/Products";
function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/products" element={<Products/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
