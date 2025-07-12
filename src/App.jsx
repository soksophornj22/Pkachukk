import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <About />
        {/* <Team /> */}
        {/* <Testimonials /> */}
        {/* <CTA /> */}
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
