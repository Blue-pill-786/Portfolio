import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed w-[300px] h-[300px]
                 bg-indigo-500/20 rounded-full blur-[120px]
                 -translate-x-1/2 -translate-y-1/2 z-0"
    />
  );
}
