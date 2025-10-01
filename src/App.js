import "./App.css"
import TituloSeccion from "./layout/TituloSeccion"
import { useMediaQuery } from 'react-responsive';
import LaColeccionPerdida from "./componentes/LaColeccionPerdida"
import Videojuego from "./componentes/Videojuego";
export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <div className='titulo__container'>
        <h1>MANZANA {isMobile && <br />}DE LAS LUCES</h1>
      </div>
      <div className="apps__container">
        <div className="appSingle__container">
          <TituloSeccion titulo={"Los Misteriosos Túneles"}></TituloSeccion>
          <Videojuego></Videojuego>
        </div>
        <div className="appSingle__container">
          <TituloSeccion titulo={"La Colección Perdida"}></TituloSeccion>
          <LaColeccionPerdida></LaColeccionPerdida>
        </div>
      </div>
    </>
  );
}
