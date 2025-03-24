import TourDates from './components/TourDates';
import Artists from './components/Artists';
import Header from './components/Header';
import TourInfo from './components/TourInfo';
import Hero from './components/Hero';
import Merchandise from './components/Merchandise';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <TourInfo />
      <Artists />
      <TourDates />
      <Merchandise />
      <SocialProof />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;