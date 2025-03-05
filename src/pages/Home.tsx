import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <CTASection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </Box>
  );
};

export default Home; 