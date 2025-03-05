import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BlackHoleEffect from './BlackHoleEffect';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const words = text.split(' ');
  
  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: () => ({
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: delay },
        }),
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
              },
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
              },
            },
          }}
          style={{ 
            marginRight: "0.5rem",
            marginBottom: "0.5rem",
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BlackHoleEffect />
      
      {/* Overlay для лучшей читаемости текста */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, transparent 20%, rgba(23, 33, 43, 0.7) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  mb: { xs: 3, md: 4 },
                  color: '#FFFFFF',
                  textShadow: '0 0 20px rgba(232, 220, 196, 0.3)',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                <TypewriterText text="Расширяем границы информации с помощью ИИ" />
              </Typography>
              
              <Typography
                variant="h4"
                component="div"
                sx={{
                  mb: { xs: 4, md: 6 },
                  maxWidth: '800px',
                  mx: 'auto',
                  color: '#E8DCC4',
                  fontWeight: 400,
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.5,
                }}
              >
                <TypewriterText 
                  text="Разрушаем барьеры между языками, временами и людьми"
                  delay={1.5}
                />
              </Typography>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #E8DCC4 0%, #D4B996 100%)',
                    color: '#17212B',
                    px: { xs: 4, md: 6 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 600,
                    boxShadow: '0 0 20px rgba(232, 220, 196, 0.2)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #D4B996 0%, #E8DCC4 100%)',
                      boxShadow: '0 0 30px rgba(232, 220, 196, 0.3)',
                    },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                  }}
                >
                  Узнать больше
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 