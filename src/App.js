import "./App.css"
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';
import FrameAnimation from "./FrameAnimacion";

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <div className='titulo__container'>
        <h1>Manzana {isMobile && <br />}de las Luces</h1>
        <h6>Sitio en construcción</h6>
      </div>
        <FrameAnimation interval={300} size={250} />
      {/* <div className="spline__container">
        <Spline scene="https://prod.spline.design/nzz7TzFhaIvcWv2n/scene.splinecode" />
      </div> */}

    </>
  );
}
