import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect, useState } from "react";
import Contexto from "./Context";

function App() {
  const endpoint = "/fotos.json";
  const [galeria, setGaleria] = useState([]);
  
  const GetData = async () => {
    const res = await fetch(endpoint);
    let dataJson = await res.json();
    let data = dataJson.photos.map((e) => ({
      id: e.id,
      src: e.src.tiny,
      desc: e.alt,
      favorito: false,
    }));
    setGaleria(data);        
  };
  useEffect(() => {
    GetData();
  }, []);
  console.log(galeria);
  return (
    <div className="App">
      <Contexto.Provider value={{ galeria, setGaleria }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;
