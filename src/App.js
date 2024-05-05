import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PokemonClick from "./pages/PokemonClick";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PokemonClick/:id" element={<PokemonClick />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
