import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';

import "./LaColeccionPerdida.css"

export default function LaColeccionPerdida() {
    const wrapRef = useRef(null);

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

/*     useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const onWheel = (e) => {
        // Bloquea el zoom del viewer
        e.preventDefault();
        e.stopPropagation();
        // Pasa el scroll a la página (o al contenedor scrollable más cercano)
        const scroller = document.scrollingElement || window;
        const top = e.deltaY;
        if ('scrollBy' in window) window.scrollBy({ top });
        else scroller.scrollTop += top;
        };

        // En Chrome en trackpad “pinch-to-zoom” llega como wheel con ctrlKey=true;
        // igual lo bloqueamos (e.preventDefault) y pasamos el delta al documento.
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, []); */

/*     useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const passToPage = (dy) => {
        const scroller = document.scrollingElement || window;
        if ('scrollBy' in window) window.scrollBy({ top: dy });
        else scroller.scrollTop += dy;
        };

        const onWheel = (e) => {
        e.preventDefault();
        e.stopPropagation();
        passToPage(e.deltaY);
        };

        // Bloquear pinch en móviles
        const onTouchMove = (e) => {
        if (e.touches && e.touches.length > 1) {
            e.preventDefault();
            e.stopPropagation();
        }
        };

        // Safari iOS usa estos eventos de gesto
        const onGesture = (e) => {
        e.preventDefault();
        e.stopPropagation();
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        el.addEventListener('touchmove', onTouchMove, { passive: false });
        el.addEventListener('gesturestart', onGesture, { passive: false });
        el.addEventListener('gesturechange', onGesture, { passive: false });
        el.addEventListener('gestureend', onGesture, { passive: false });

        return () => {
        el.removeEventListener('wheel', onWheel);
        el.removeEventListener('touchmove', onTouchMove);
        el.removeEventListener('gesturestart', onGesture);
        el.removeEventListener('gesturechange', onGesture);
        el.removeEventListener('gestureend', onGesture);
        };
    }, []); */


    return (
        <>            
            <div className="splineGalery__container">
                <div ref={wrapRef} className="spline-wrap">
                    <div class="card">
                        <span class="ribbon">Próximamente</span>
                    </div>
                    <Spline scene="https://prod.spline.design/uv2f2QHlNCAJ2Tkt/scene.splinecode"/>
                    <div className="spline-capture" />
                </div>
            </div>
        </>
    )
}