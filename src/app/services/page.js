import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import Footer from '../components/Footer';
import SpicesExport from '../components/SpicesExport';
import PepperExport from '../components/PepperExport';

export const metadata = {
  title: 'Services',
  description: 'Civil engineering, interior fit-out, and MEP services by Skylx.',
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
