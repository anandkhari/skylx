import Navbar from '../components/Navbar';
import ContactPage from '../components/ContactPage';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Skylx for civil engineering, interior fit-out, and MEP project enquiries.',
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
