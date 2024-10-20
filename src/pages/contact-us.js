import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactUs() {
  return (
    <>
      <Header />
      <main>
        <h1 style={{ textAlign: 'center', margin: '2rem 0', fontSize:"50px" }}>Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
