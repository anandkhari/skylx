import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import Footer from '../components/Footer';
import SpicesExport from '../components/SpicesExport';
import PepperExport from '../components/PepperExport';

export const metadata = {
  title: 'Export Products & Services',
  description: 'Skylx exports premium agricultural commodities — GI-certified cardamom and Malabar pepper — from Kerala to global markets. Explore our product range and export capabilities.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Skylx Export Products — Cardamom & Pepper',
    description: 'Explore our premium commodity export range: GI-certified cardamom and Malabar/Tellicherry pepper sourced direct from Kerala farms.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <SpicesExport />
      <PepperExport />
      <Footer />
    </>
  );
}
