import Navbar from '../components/Navbar';
import PremiumSpicesHero from '../components/PremiumSpicesHero';
import CardamomGrades from '../components/CardamomGrades';
import SpicesQuality from '../components/SpicesQuality';
import SpicesCTA from '../components/SpicesCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Premium Spices',
  description: 'Skylx exports premium-grade cardamom sourced from the Cardamom Hills of Kerala — certified, graded, and delivered to global standards.',
};

export default function SpicesPage() {
  return (
    <>
      <Navbar />
      <PremiumSpicesHero />
      <CardamomGrades />
      <SpicesQuality />
      <SpicesCTA />
      <Footer />
    </>
  );
}
