import Navbar from '../components/Navbar';
import PepperHero from '../components/PepperHero';
import PepperGrades from '../components/PepperGrades';
import PepperQuality from '../components/PepperQuality';
import SpicesCTA from '../components/SpicesCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Premium Pepper',
  description: 'Skylx exports GI-certified Malabar and Tellicherry black pepper from the Western Ghats — density-graded, piperine-verified, and cleared to global export standards.',
};

export default function PepperPage() {
  return (
    <>
      <Navbar />
      <PepperHero />
      <PepperGrades />
      <PepperQuality />
      <SpicesCTA />
      <Footer />
    </>
  );
}
