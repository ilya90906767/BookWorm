import { Box } from '@mui/material';
import { keyframes } from '@mui/system';
import { useEffect, useRef } from 'react';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const BlackHoleEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | undefined>(undefined);

  const animate = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angleRad = Math.atan2(mousePosition.current.y - centerY, mousePosition.current.x - centerX);
      const angleDeg = (angleRad * 180) / Math.PI;
      
      const distance = Math.sqrt(
        Math.pow(mousePosition.current.x - centerX, 2) + 
        Math.pow(mousePosition.current.y - centerY, 2)
      );
      
      const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
      const distanceRatio = Math.min(distance / maxDistance, 1);

      const scale = 1 + distanceRatio * 0.3;
      const rotation = angleDeg;
      const translateX = ((mousePosition.current.x - centerX) / rect.width) * 50;
      const translateY = ((mousePosition.current.y - centerY) / rect.height) * 50;
      
      containerRef.current.style.setProperty('--rotation-offset', `${rotation}deg`);
      containerRef.current.style.setProperty('--distortion', `${scale}`);
      containerRef.current.style.setProperty('--translate-x', `${translateX}px`);
      containerRef.current.style.setProperty('--translate-y', `${translateY}px`);
      containerRef.current.style.setProperty('--glow-opacity', `${distanceRatio}`);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        background: '#1A1A1A',
        transition: 'background-color 0.5s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '600px',
          height: '600px',
          transform: 'translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px))) rotate(calc(var(--rotation-offset, 0deg)))',
          background: 'radial-gradient(circle at center, transparent 30%, #E8DCC4 45%, #D4B996 50%, transparent 70%)',
          opacity: 0.15,
          animation: `${rotateAnimation} 30s linear infinite`,
          filter: 'blur(8px)',
          transition: 'all 0.3s ease-out',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '400px',
          height: '400px',
          transform: 'translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px))) scale(var(--distortion, 1))',
          background: 'radial-gradient(circle at center, #1A1A1A 30%, #E8DCC4 60%, transparent 70%)',
          animation: `${pulseAnimation} 4s ease-in-out infinite`,
          filter: 'blur(4px)',
          transition: 'all 0.3s ease-out',
        },
      }}
    >
      {/* Звезды */}
      {[...Array(150)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            backgroundColor: '#E8DCC4',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.2,
            animation: `${pulseAnimation} ${Math.random() * 3 + 2}s ease-in-out infinite`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
      
      {/* Световые лучи (используем радиальный градиент вместо линий) */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '800px',
          height: '800px',
          transform: 'translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px))) scale(var(--distortion, 1))',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'conic-gradient(from 0deg, transparent, rgba(232, 220, 196, 0.05), transparent 30deg)',
            animation: `${rotateAnimation} 20s linear infinite`,
            filter: 'blur(3px)',
          },
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* Внешнее свечение */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1000px',
          height: '1000px',
          transform: 'translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px))) scale(var(--distortion, 1))',
          background: 'radial-gradient(circle at center, transparent 40%, rgba(232, 220, 196, 0.05) 60%, transparent 70%)',
          animation: `${rotateAnimation} 40s linear infinite reverse`,
          filter: 'blur(8px)',
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* Дополнительное свечение при приближении курсора */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1200px',
          height: '1200px',
          transform: 'translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px)))',
          background: 'radial-gradient(circle at center, rgba(232, 220, 196, 0.1) 0%, transparent 70%)',
          opacity: 'var(--glow-opacity, 0)',
          transition: 'all 0.3s ease-out',
          filter: 'blur(20px)',
        }}
      />
    </Box>
  );
};

export default BlackHoleEffect; 