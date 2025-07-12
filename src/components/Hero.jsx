import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#featured-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/hero-background.jpg')`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-pink-500 px-4 py-2 text-sm font-medium tracking-widest text-white"
          >
            NEW BEAUTY COLLECTION 2024
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            ENDLESS
            <span className="block text-pink-400">BEAUTY PHILOSOPHY</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl"
          >
            perceive with the eye of love
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ec4899' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProducts}
              className="group flex items-center justify-center rounded-lg bg-pink-500 px-8 py-4 font-bold tracking-widest text-white transition-all duration-300 hover:bg-pink-600 hover:text-white"
            >
              SHOP NOW
              <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            {/* 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-lg border-2 border-pink-400 px-8 py-4 font-bold tracking-widest text-pink-400 transition-all duration-300 hover:bg-pink-400 hover:text-white"
            >
              <FiPlay className="mr-2 h-5 w-5" />
              WATCH TUTORIAL
            </motion.button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mx-auto grid max-w-2xl grid-cols-3 gap-8 pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">100K+</div>
              <div className="text-sm tracking-wide text-gray-300">
                HAPPY CUSTOMERS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">200+</div>
              <div className="text-sm tracking-wide text-gray-300">
                BEAUTY PRODUCTS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">24/7</div>
              <div className="text-sm tracking-wide text-gray-300">
                BEAUTY SUPPORT
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-pink-400"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 h-3 w-1 rounded-full bg-pink-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
