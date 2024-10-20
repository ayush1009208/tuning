import Header from '@/components/Header';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function RequestAQuote() {
  return (
    <>
      <Header />
      <main>
      <h1 style={{ textAlign: 'center', margin: '2rem 0', fontSize:"50px" }}>Request a Quote</h1>
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
