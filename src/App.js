import "./App.css"
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';
import FrameAnimation from "./FrameAnimacion";

const framesAmeghino = [
  "/animaciones/mira y espera/ameghino-mira-1.png",
  "/animaciones/mira y espera/ameghino-mira-2.png",
  "/animaciones/mira y espera/ameghino-mira-3.png",
  "/animaciones/mira y espera/ameghino-mira-4.png",
  "/animaciones/mira y espera/ameghino-mira-5.png",
];
const framesNaty = [
  "/animaciones/idle/idle-pie/idleS-01.png", 
  "/animaciones/idle/idle-pie/idleS-02.png", 
];

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <div className='titulo__container'>
        <h1>MANZANA {isMobile && <br />}DE LAS LUCES</h1>
      </div>
      <div className="videojuego__container">
        <div className="videojuego__subContainer">
          <div className="imgNaty">
            <FrameAnimation interval={300} size={250} frames={framesNaty} />
          </div>
          <div className="videojuego__botonesConatiner">
            <a href="https://manzanadelasluces.itch.io/los-misteriosos-tuneles" className="videojuego__btnContainer">
              <p>descargar para Windows</p>
              <img src="/logos/itch.png"></img>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.manzanadelasluces.lmt&pli=1" className="videojuego__btnContainer">
              <p>descargar para Android</p>
              <img className="imgGoogle" src="/logos/googlePlay.png"></img>
            </a>
          </div>
        </div>
      </div>
        <div className="imgAmeghino">
          <FrameAnimation interval={300} size={250} frames={framesAmeghino} />
        </div>
        
      {/* <div className="spline__container">
        <Spline scene="https://prod.spline.design/nzz7TzFhaIvcWv2n/scene.splinecode" />
      </div> */}

    </>
  );
}
