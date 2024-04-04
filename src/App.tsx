import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Versions from "./pages/Versions";
import Products from "./pages/Products";
import Regions from "./pages/Regions";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/versions" element={<Versions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/regions" element={<Regions />} />
      </Routes>
    </>
  );
}

export default App;
