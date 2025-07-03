import { useEffect, useState } from "react";

const frames = [
  "/animaciones/mira y espera/ameghino-mira-1.png",
  "/animaciones/mira y espera/ameghino-mira-2.png",
  "/animaciones/mira y espera/ameghino-mira-3.png",
  "/animaciones/mira y espera/ameghino-mira-4.png",
  "/animaciones/mira y espera/ameghino-mira-5.png",
];

export default function FrameAnimation({ interval = 250, size = 100 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, interval);
    return () => clearInterval(id); // limpia el intervalo al desmontar
  }, [interval]);

  return (
    <img
      src={frames[currentIndex]}
      alt={`Frame ${currentIndex + 1}`}
      width={size}
      height={size}
    />
  );
}
