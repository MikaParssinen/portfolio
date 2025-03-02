import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create stars
    const stars = [];
    const starCount = Math.floor(window.innerWidth * window.innerHeight / 1000);
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05
      });
    }
    
    // Create shooting stars
    const shootingStars = [];
    const maxShootingStars = 2; // Maximum number of shooting stars at once
    
    // Function to create a new shooting star
    const createShootingStar = () => {
      // Only create if we're below the maximum
      if (shootingStars.length < maxShootingStars && Math.random() < 0.015) {
        const speed = 5 + Math.random() * 10;
        const angle = Math.PI * (0.1 + Math.random() * 0.1); // Angled slightly downward
        
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 3), // Start in top third of screen
          length: 50 + Math.random() * 80, // Length of the shooting star trail
          speed: speed,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          opacity: 0.7 + Math.random() * 0.3,
          decay: 0.01 + Math.random() * 0.02 // How quickly it fades
        });
      }
    };
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#111827'; // Dark background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Try to create a new shooting star
      createShootingStar();
      
      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        
        // Draw shooting star
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.dx * (star.length / star.speed), 
                  star.y - star.dy * (star.length / star.speed));
        
        // Create gradient for the trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.dx * (star.length / star.speed), 
          star.y - star.dy * (star.length / star.speed)
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Move shooting star
        star.x += star.dx;
        star.y += star.dy;
        star.opacity -= star.decay;
        
        // Remove if off screen or faded out
        if (star.x > canvas.width || star.y > canvas.height || star.opacity <= 0) {
          shootingStars.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        pointerEvents: 'none'
      }} 
    />
  );
};

export default StarryBackground;