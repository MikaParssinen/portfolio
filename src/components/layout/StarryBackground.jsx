import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const animationRef = useRef(null);
  const prevDimensionsRef = useRef({ width: 0, height: 0 });
  const lastShootingStarTimeRef = useRef(0);

  // Create a single star with the given bounds
  const createStar = (maxWidth, maxHeight) => {
    return {
      x: Math.random() * maxWidth,
      y: Math.random() * maxHeight,
      radius: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.005 + 0.002, // Very slow falling speed
      twinkleSpeed: Math.random() * 0.01,
      twinkleDirection: Math.random() > 0.5 ? 1 : -1,
    };
  };

  // Create a shooting star
  const createShootingStar = (width, height) => {
    // Start from left or right edge
    const fromLeft = Math.random() > 0.5;
    const angle = Math.random() * Math.PI / 4 + Math.PI / 8; // Angle between PI/8 and 3PI/8 (downward diagonal)
    
    return {
      x: fromLeft ? 0 : width,
      y: Math.random() * height * 0.6, // Start in top 60% of screen
      length: Math.random() * 80 + 40, // Trail length: 40-120px
      speed: Math.random() * 5 + 8, // Faster than regular stars: 8-13px per frame
      angle: fromLeft ? angle : Math.PI - angle, // Direction based on starting side
      opacity: 1,
      trail: [], // Store previous positions for trail
      maxTrailLength: 10, // Maximum number of trail positions
      fadeRate: 0.02, // How quickly the shooting star fades
      active: true
    };
  };

  // Generate stars to fill a specific area
  const generateStarsForArea = (width, height, existingWidth, existingHeight) => {
    // Calculate area to fill with new stars
    const totalArea = width * height;
    const existingArea = Math.min(width, existingWidth) * Math.min(height, existingHeight);
    const newArea = totalArea - existingArea;
    
    // Calculate how many stars to add for the new area
    const starDensity = 1 / 2000; // One star per 2000px²
    const newStarCount = Math.floor(newArea * starDensity);
    
    // Generate new stars
    const newStars = [];
    for (let i = 0; i < newStarCount; i++) {
      // Create stars in the newly exposed areas
      let x, y;
      if (width > existingWidth) {
        // New width area
        x = Math.random() * (width - existingWidth) + existingWidth;
        y = Math.random() * height;
      } else {
        // New height area
        x = Math.random() * width;
        y = Math.random() * (height - existingHeight) + existingHeight;
      }
      
      newStars.push({
        x,
        y,
        radius: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.005 + 0.002, // Very slow falling speed
        twinkleSpeed: Math.random() * 0.01,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }
    
    return newStars;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Initial setup
    const initializeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      prevDimensionsRef.current = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      
      // Generate initial stars
      const starCount = Math.floor((canvas.width * canvas.height) / 2000);
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(createStar(canvas.width, canvas.height));
      }
    };
    
    // Handle resizing
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const { width: prevWidth, height: prevHeight } = prevDimensionsRef.current;
      
      // Update canvas size
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // Add stars if the window got bigger
      if (newWidth > prevWidth || newHeight > prevHeight) {
        const newStars = generateStarsForArea(newWidth, newHeight, prevWidth, prevHeight);
        starsRef.current = [...starsRef.current, ...newStars];
      }
      
      // Update previous dimensions reference
      prevDimensionsRef.current = { width: newWidth, height: newHeight };
    };
    
    // Draw a shooting star with a trail
    const drawShootingStar = (star) => {
      // Draw the trail
      if (star.trail.length > 0) {
        // Create gradient for the trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y, 
          star.trail[star.trail.length - 1].x, 
          star.trail[star.trail.length - 1].y
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        
        // Draw line through trail points
        for (let i = 0; i < star.trail.length; i++) {
          ctx.lineTo(star.trail[i].x, star.trail[i].y);
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Draw the shooting star head
      ctx.beginPath();
      ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    };
    
    // Animation function
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update regular stars
      starsRef.current.forEach(star => {
        // Twinkle effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity > 1) {
          star.opacity = 1;
          star.twinkleDirection = -1;
        } else if (star.opacity < 0.3) {
          star.opacity = 0.3;
          star.twinkleDirection = 1;
        }
        
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
          star.speed = Math.random() * 0.005 + 0.002; // Very slow falling speed
        }
      });
      
      // Check if it's time to create a new shooting star
      if (timestamp - lastShootingStarTimeRef.current > 3000 + Math.random() * 5000) {
        shootingStarsRef.current.push(createShootingStar(canvas.width, canvas.height));
        lastShootingStarTimeRef.current = timestamp;
      }
      
      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter(star => {
        if (!star.active) return false;
        
        // Update trail
        star.trail.unshift({ x: star.x, y: star.y }); // Add current position to trail
        if (star.trail.length > star.maxTrailLength) {
          star.trail.pop(); // Remove oldest trail position
        }
        
        // Move shooting star
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Fade out gradually
        star.opacity -= star.fadeRate;
        
        // Draw the shooting star
        drawShootingStar(star);
        
        // Check if shooting star is still visible
        if (star.opacity <= 0 || 
            star.x < -star.length || 
            star.x > canvas.width + star.length || 
            star.y < -star.length || 
            star.y > canvas.height + star.length) {
          return false;
        }
        
        return true;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    initializeCanvas();
    window.addEventListener('resize', handleResize);
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
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
