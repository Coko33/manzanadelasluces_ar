import "./App.css"
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
      <LaColeccionPerdida></LaColeccionPerdida>
      <Videojuego></Videojuego>
    </>
  );
}
