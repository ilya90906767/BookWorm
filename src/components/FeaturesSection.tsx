import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const FeaturesSection = () => {
  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 56 }} />,
      title: 'Изучение языка',
      description: 'Персонализированное обучение с адаптацией текстов под ваш уровень владения языком.',
    },
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 56 }} />,
      title: 'Упрощение текстов',
      description: 'Автоматическая адаптация сложности текста на любом языке под ваш уровень понимания.',
    },
    {
      icon: <HeadphonesIcon sx={{ fontSize: 56 }} />,
      title: 'Генерация аудиокниг',
      description: 'Создание аудиокниг на любом языке с настройкой сложности и стиля речи.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#1A1A1A' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#E8DCC4',
            background: 'linear-gradient(135deg, #E8DCC4 0%, #D4B996 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 15px rgba(232, 220, 196, 0.3)',
          }}
        >
          Что мы предлагаем?
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #2A2A2A 0%, #1F1F1F 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(232, 220, 196, 0.15) 0%, transparent 50%)',
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
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                        color: '#E8DCC4',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        textAlign: 'center',
                        color: '#E8DCC4',
                        fontWeight: 600,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: 'center',
                        color: '#B4A284',
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 