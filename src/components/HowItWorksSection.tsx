import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ShareIcon from '@mui/icons-material/Share';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CloudUploadIcon sx={{ fontSize: 48 }} />,
      title: 'Загрузите текст',
      description: 'Загрузите любой текст, который хотите исследовать или перевести.',
    },
    {
      icon: <AutoFixHighIcon sx={{ fontSize: 48 }} />,
      title: 'ИИ анализирует',
      description: 'Наш ИИ анализирует контекст, стиль и культурные особенности.',
    },
    {
      icon: <ShareIcon sx={{ fontSize: 48 }} />,
      title: 'Получите результат',
      description: 'Получите перевод или анализ с сохранением оригинального смысла.',
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
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #E8DCC4, #D4B996)',
              borderRadius: '2px',
            }
          }}
        >
          Как работает BookWorm?
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: '#2A2A2A',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(232, 220, 196, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(232, 220, 196, 0.1) 0%, transparent 50%)',
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
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        right: { xs: '50%', md: '-10%' },
                        top: { xs: 'auto', md: '50%' },
                        bottom: { xs: '-10%', md: 'auto' },
                        transform: {
                          xs: 'translateX(50%) rotate(90deg)',
                          md: 'translateY(-50%)',
                        },
                        color: '#E8DCC4',
                        fontSize: '2rem',
                        zIndex: 2,
                      }}
                    >
                      →
                    </Box>
                  )}
                  <Box
                    sx={{
                      color: '#E8DCC4',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: '#E8DCC4',
                      fontWeight: 600,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#D4B996',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection; 