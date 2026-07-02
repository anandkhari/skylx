import Navbar from '../components/Navbar';
import PepperHero from '../components/PepperHero';
import PepperGrades from '../components/PepperGrades';
import PepperQuality from '../components/PepperQuality';
import SpicesCTA from '../components/SpicesCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Premium Black Pepper Export',
  description: 'Skylx exports GI-certified Malabar and Tellicherry black pepper from the Western Ghats — density-graded to TGSEB, TGEB, and MG-1 standards, piperine-verified, and cleared to global export requirements.',
  alternates: { canonical: '/pepper' },
  openGraph: {
    title: 'Skylx Premium Black Pepper — Malabar & Tellicherry',
    description: 'GI-certified black pepper sourced direct from Kerala. Available in TGSEB, TGEB, and MG-1 grades. Bulk export with phytosanitary certificates.',
  },
  keywords: [
    'Malabar pepper export',
    'Tellicherry pepper',
    'TGSEB pepper',
    'black pepper Kerala',
    'pepper export India',
    'GI certified pepper',
    'bulk pepper export',
  ],
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
