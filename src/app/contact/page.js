import Navbar from '../components/Navbar';
import ContactPage from '../components/ContactPage';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Skylx for premium spice export enquiries — cardamom, pepper, bulk orders, and global trade partnerships. Located in Kozhikode, Kerala.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Skylx — Premium Spice Exporters',
    description: 'Reach our team for cardamom and pepper export enquiries, sample requests, or bulk order discussions.',
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
