import { useEffect, useState } from "react";



export default function FrameAnimation({ interval, size, frames}) {
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
      //height={size}
    />
  );
}
