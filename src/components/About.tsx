import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const PARTICLE_COUNT = 100;
    const CONNECT_DISTANCE = 120;
    const MOUSE_CONNECT_DISTANCE = 160;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      // Particle to particle connections
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DISTANCE) {
            ctx.shadowColor = "rgba(59,130,246,0.5)";
            ctx.shadowBlur = 8;

            ctx.beginPath();
            ctx.strokeStyle = "rgba(59,130,246,0.9)";
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();

            ctx.shadowBlur = 0; // reset
          }
        }
      }

      // Mouse connections
      particles.forEach((p) => {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_CONNECT_DISTANCE) {

          ctx.shadowColor = "rgba(59,130,246,0.9)";
          ctx.shadowBlur = 14;

          ctx.beginPath();
          ctx.strokeStyle = "rgba(59,130,246,0.9)";
          ctx.lineWidth = 1.4;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();

          ctx.shadowBlur = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }}
    />
  );
}