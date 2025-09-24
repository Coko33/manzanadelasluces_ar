import { useEffect, useRef } from "react";
import TituloSeccion from "../layout/TituloSeccion"
import Spline from '@splinetool/react-spline';

import "./LaColeccionPerdida.css"

export default function LaColeccionPerdida() {
    const containerRef = useRef(null);

    useEffect(() => {
        const canvases = containerRef.current?.querySelectorAll("canvas");
        if (!canvases) return;

        const stopWheel = (e) => e.preventDefault();
        canvases.forEach((c) =>
        c.addEventListener("wheel", stopWheel, { passive: false })
        );

        return () => {
            canvases.forEach((c) =>
                c.removeEventListener("wheel", stopWheel)
            );
        };
    }, []);

    return (
        <>
            <TituloSeccion titulo={"La Colección Perdida"}></TituloSeccion>
            <div className="laColeccionPerdida__container">
                {/* <div className="spline__container">
                    <Spline scene="https://prod.spline.design/nzz7TzFhaIvcWv2n/scene.splinecode" />
                </div> */}
                <div ref={containerRef} className="spline__container">
                    <Spline
                        scene="https://prod.spline.design/qLJJdz-GuUQv91yN/scene.splinecode"
                    />
                    <Spline
                        scene="https://prod.spline.design/uv2f2QHlNCAJ2Tkt/scene.splinecode"
                    />
                    <Spline
                        scene="https://prod.spline.design/6CE3GeQEi6nob2kB/scene.splinecode"
                    />
                </div>
                
            </div>
        </>
    )
}