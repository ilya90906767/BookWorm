import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

const AboutSection = () => {
  const features = [
    {
      icon: <LanguageIcon sx={{ fontSize: 48 }} />,
      title: 'Языки',
      description: 'Преодолеваем языковые барьеры с помощью ИИ',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 48 }} />,
      title: 'Время',
      description: 'Связываем прошлое с настоящим',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 48 }} />,
      title: 'Люди',
      description: 'Объединяем людей через знания',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
            }}
          >
            Что такое BookWorm?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontSize: '1.2rem',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            BookWorm - это инновационный проект, использующий искусственный интеллект для преодоления барьеров в доступе к информации. Мы делаем знания доступными вне зависимости от языка, времени создания и культурного контекста.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 2 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1">
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection; 