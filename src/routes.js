import { CarrinhoProvider } from "common/context/Carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Carrinho from "./Paginas/Carrinho";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CarrinhoProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </CarrinhoProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
