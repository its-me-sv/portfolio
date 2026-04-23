import { useEffect, useRef } from "react";

export function Highlighter() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let W = window.innerWidth, H = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const trail = [];
    let last = { x: -999, y: -999, t: 0 };

    const color = () => {
      const s = getComputedStyle(document.documentElement);
      return s.getPropertyValue("--highlight-soft").trim() || "rgba(255,224,102,0.55)";
    };

    const onMove = (e) => {
      const now = performance.now();
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      const dist = Math.hypot(dx, dy);
      const vel = Math.min(1, dist / 40);
      if (dist > 2) {
        trail.push({ x: e.clientX, y: e.clientY, t: now, w: 18 + (1 - vel) * 10, a: 0.9 });
        if (trail.length > 120) trail.shift();
      }
      last = { x: e.clientX, y: e.clientY, t: now };
    };
    window.addEventListener("pointermove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const now = performance.now();
      const c = color();
      for (let i = trail.length - 1; i >= 0; i--) {
        const age = (now - trail[i].t) / 1200;
        if (age > 1) trail.splice(i, 1);
        else trail[i].a = (1 - age) * 0.9;
      }
      if (trail.length < 2) { raf = requestAnimationFrame(draw); return; }

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < trail.length; i++) {
        const p0 = trail[i - 1], p1 = trail[i];
        const a = Math.min(p0.a, p1.a);
        if (a <= 0) continue;
        ctx.globalAlpha = a;
        ctx.strokeStyle = c;
        ctx.lineWidth = (p0.w + p1.w) / 2;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hilite-canvas" />;
}
