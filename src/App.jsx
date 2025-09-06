import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import SobreNos from "./SobreNos";
import Contato from "./Contato";
import Login from "./Login";
import Servicos from "./Servicos";
import Cadastro from "./Cadastro";

function NotFound() {
  return <h1>404: Page Not Found</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}