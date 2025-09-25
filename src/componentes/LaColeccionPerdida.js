import { useEffect, useRef } from "react";
import TituloSeccion from "../layout/TituloSeccion"
import Spline from '@splinetool/react-spline';

import "./LaColeccionPerdida.css"

export default function LaColeccionPerdida() {
    const wrapRef = useRef(null);

    /* useEffect(() => {
        const canvases = document.querySelectorAll('.spline-wrap canvas');
        canvases.forEach((canvas) => {
        canvas.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
        });
    }, []); */
    useEffect(() => {
        const c = document.querySelector('.spline-wrap canvas');
        if (!c) return;
        const onWheel = e => e.preventDefault();
        c.addEventListener('wheel', onWheel, { passive:false });
        return () => c.removeEventListener('wheel', onWheel);
    }, []);


    const syncCanvas = () => {
        const wrap = wrapRef.current;
        if (!wrap) return;
        const canvas = wrap.querySelector('canvas');
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const w = Math.round(wrap.clientWidth * dpr);
        const h = Math.round(wrap.clientHeight * dpr);

        if (canvas.width !== w) canvas.width = w;
        if (canvas.height !== h) canvas.height = h;
    };

    useEffect(() => {
        syncCanvas();
        const ro = new ResizeObserver(syncCanvas);
        ro.observe(wrapRef.current);
        window.addEventListener('resize', syncCanvas);
        return () => { ro.disconnect(); window.removeEventListener('resize', syncCanvas); };
    }, []);


    return (
        <>
            <TituloSeccion titulo={"La Colección Perdida"}></TituloSeccion>
            <div className="splineGalery__container">
                <div ref={wrapRef} className="spline-wrap">
                    <Spline scene="https://prod.spline.design/qLJJdz-GuUQv91yN/scene.splinecode"/>
                </div>
                <div ref={wrapRef} className="spline-wrap">
                    <Spline scene="https://prod.spline.design/uv2f2QHlNCAJ2Tkt/scene.splinecode"/>
                </div>
                <div ref={wrapRef} className="spline-wrap">
                    <Spline scene="https://prod.spline.design/6CE3GeQEi6nob2kB/scene.splinecode"/>
                </div>
            </div>
        </>
    )
}