interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export function setupParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let animationFrameId: number;
  const particles: Particle[] = [];
  const particleCount = 50;
  const colors = ['#c084fc', '#e879f9', '#f472b6', '#60a5fa', '#34d399'];

  const resizeCanvas = () => {
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  };

  const createParticles = () => {
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      p.x += p.speedX;
      p.y += p.speedY;
      
      if (p.x > canvas.width || p.x < 0) p.speedX = -p.speedX;
      if (p.y > canvas.height || p.y < 0) p.speedY = -p.speedY;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.7;
      ctx.fill();
    }
    
    connectParticles();
    animationFrameId = requestAnimationFrame(animate);
  };

  const connectParticles = () => {
    const maxDistance = 150;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          
          ctx.beginPath();
          ctx.strokeStyle = particles[i].color;
          ctx.globalAlpha = opacity * 0.2;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  window.addEventListener('resize', resizeCanvas);
  
  resizeCanvas();
  createParticles();
  animate();
  
  return () => {
    window.removeEventListener('resize', resizeCanvas);
    cancelAnimationFrame(animationFrameId);
  };
}