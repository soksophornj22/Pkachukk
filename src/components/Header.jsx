import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { useCart } from './CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#new-arrivals' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-pink-900/90 shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between lg:h-20">
            {/* Hamburger Menu Button (Mobile) */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="z-20 rounded-md p-2 text-white transition-colors duration-200 hover:text-pink-400 lg:hidden"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>

            {/* Cart Icon (Mobile, always visible) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-20 mx-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-colors duration-200 hover:bg-pink-600 lg:hidden"
              onClick={() => setCartOpen(true)}
            >
              <FiShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-pink-500 shadow">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Logo (centered absolutely) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute top-1/2 left-1/2 z-10 flex-shrink-0 -translate-x-1/2 -translate-y-1/2"
              style={{ pointerEvents: 'none' }}
            >
              <h1 className="text-2xl font-bold tracking-widest text-white select-none lg:text-3xl">
                PkachukkBeauty
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-8 lg:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-pink-400"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Cart Icon (Desktop) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative hidden h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-colors duration-200 hover:bg-pink-600 lg:flex"
              onClick={() => setCartOpen(true)}
            >
              <FiShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-pink-500 shadow">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-pink-200 bg-pink-50 lg:hidden"
            >
              <div className="space-y-4 px-4 py-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full py-2 text-left font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-pink-600"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="relative flex w-full items-center justify-center rounded-lg bg-pink-500 py-3 text-white transition-colors duration-200 hover:bg-pink-600"
                >
                  <FiShoppingBag className="mr-2 h-5 w-5" />
                  Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-pink-500 shadow">
                      {cartCount}
                    </span>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
