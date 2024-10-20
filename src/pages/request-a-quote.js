import Header from '@/components/Header';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function RequestAQuote() {
  return (
    <>
      <Header />
      <main>
        <h1>Request a Quote</h1>
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
