import Navbar from '../components/Navbar';
import PremiumSpicesHero from '../components/PremiumSpicesHero';
import CardamomGrades from '../components/CardamomGrades';
import SpicesQuality from '../components/SpicesQuality';
import SpicesCTA from '../components/SpicesCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Premium Cardamom Export',
  description: 'Skylx exports premium green cardamom from the Cardamom Hills of Kerala — all grades from 8mm+ to Below 6mm, lab-certified for essential oil content, FSSAI and APEDA compliant.',
  alternates: { canonical: '/cardamom' },
  openGraph: {
    title: 'Skylx Premium Cardamom — Kerala Origin, All Grades',
    description: 'GI-certified green cardamom in all commercial grades. Sourced from Idukki and Wayanad. Bulk export with full compliance documentation.',
  },
  keywords: [
    'cardamom export India',
    'Kerala green cardamom',
    'cardamom grades',
    'Idukki cardamom export',
    'premium cardamom',
    'bulk cardamom export',
    'cardamom supplier Kerala',
  ],
};

export default function CardamomPage() {
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
