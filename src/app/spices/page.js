import Navbar from '../components/Navbar';
import PremiumSpicesHero from '../components/PremiumSpicesHero';
import CardamomGrades from '../components/CardamomGrades';
import SpicesQuality from '../components/SpicesQuality';
import SpicesCTA from '../components/SpicesCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Premium Cardamom Export',
  description: 'Skylx exports premium green cardamom from the Cardamom Hills of Kerala — available in all grades from 8mm+ Premium Select to Below 6mm. Lab-certified for essential oil content and export compliance.',
  alternates: { canonical: '/spices' },
  openGraph: {
    title: 'Skylx Premium Cardamom — All Grades, Kerala Origin',
    description: 'Green cardamom in 6 export grades from the Cardamom Hills of Idukki and Wayanad. Lab-verified, FSSAI/APEDA compliant, bulk supply available.',
  },
  keywords: [
    'cardamom export India',
    'Kerala cardamom',
    'green cardamom grades',
    'cardamom export',
    'Idukki cardamom',
    'bulk cardamom',
    'premium spice export',
  ],
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
