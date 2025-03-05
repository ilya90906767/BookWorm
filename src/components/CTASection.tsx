import { Box, Container, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const translations = [
  {
    lang: 'Русский',
    title: 'Присоединяйтесь к BookWorm!',
    subtitle: 'Начните исследовать мир без границ уже сегодня',
    button: 'Начать'
  },
  {
    lang: 'English',
    title: 'Join BookWorm!',
    subtitle: 'Start exploring a world without boundaries today',
    button: 'Get Started'
  },
  {
    lang: '中文',
    title: '加入 BookWorm！',
    subtitle: '今天就开始探索无边界的世界',
    button: '开始'
  },
  {
    lang: 'Español',
    title: '¡Únete a BookWorm!',
    subtitle: 'Empieza a explorar un mundo sin fronteras hoy',
    button: 'Comenzar'
  },
  {
    lang: 'العربية',
    title: 'انضم إلى BookWorm!',
    subtitle: 'ابدأ في استكشاف عالم بلا حدود اليوم',
    button: 'ابدأ'
  },
  {
    lang: 'Français',
    title: 'Rejoignez BookWorm !',
    subtitle: 'Commencez à explorer un monde sans frontières aujourd\'hui',
    button: 'Commencer'
  },
  {
    lang: 'Deutsch',
    title: 'Werden Sie Teil von BookWorm!',
    subtitle: 'Beginnen Sie heute, eine Welt ohne Grenzen zu erkunden',
    button: 'Anfangen'
  },
  {
    lang: '日本語',
    title: 'BookWormに参加しよう！',
    subtitle: '今日から境界のない世界の探索を始めましょう',
    button: '始める'
  },
  {
    lang: 'Português',
    title: 'Junte-se ao BookWorm!',
    subtitle: 'Comece a explorar um mundo sem fronteiras hoje',
    button: 'Começar'
  },
  {
    lang: 'Hindi',
    title: 'BookWorm में शामिल हों!',
    subtitle: 'आज ही सीमाओं के बिना दुनिया की खोज शुरू करें',
    button: 'शुरू करें'
  }
];

const CTASection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % translations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, #E8DCC4 0%, transparent 70%)',
          opacity: 0.05,
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  mb: 2,
                  color: '#E8DCC4',
                  opacity: 0.7,
                  letterSpacing: '0.2em',
                }}
              >
                {translations[currentIndex].lang}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: '#E8DCC4',
                  background: 'linear-gradient(135deg, #E8DCC4 0%, #D4B996 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 15px rgba(232, 220, 196, 0.3)',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                }}
              >
                {translations[currentIndex].title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 6,
                  color: '#D4B996',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {translations[currentIndex].subtitle}
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #E8DCC4 0%, #D4B996 100%)',
                    color: '#1A1A1A',
                    px: { xs: 6, md: 8 },
                    py: { xs: 2, md: 2.5 },
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 600,
                    borderRadius: '50px',
                    boxShadow: '0 0 20px rgba(232, 220, 196, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #D4B996 0%, #E8DCC4 100%)',
                      boxShadow: '0 0 30px rgba(232, 220, 196, 0.3)',
                    },
                  }}
                >
                  {translations[currentIndex].button}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection; 