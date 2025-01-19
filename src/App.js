import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { DataProvider } from "./components/Context";
function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/products" element={} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
