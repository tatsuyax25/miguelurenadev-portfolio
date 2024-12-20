import { useEffect } from "react";

const SwirlBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("swirlCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const numParticles = 500;

    function randomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        angle: randomFloat(0, Math.PI * 2),
        radius: randomFloat(0, 5),
        speed: randomFloat(0.01, 0.05),
        color: `hsl(${randomFloat(0, 360)}, 100%, 50%)`,
        size: randomFloat(1, 3),
      });
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += p.speed;
        p.radius += 0.05;

        const swirlX = canvas.width / 2 + Math.cos(p.angle) * p.radius;
        const swirlY = canvas.height / 2 + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(swirlX, swirlY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      id="swirlCanvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    ></canvas>
  );
};

export default SwirlBackground;