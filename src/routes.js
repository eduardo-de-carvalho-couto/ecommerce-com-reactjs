import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./Paginas/Inicio";
import UltimaOpcao from "./Paginas/UltimaOpcao";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ultima-opcao" element={<UltimaOpcao />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
