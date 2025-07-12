import { motion } from 'framer-motion';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
              READY TO JOIN THE
              <span className="block text-red-500">STREETWEAR REVOLUTION?</span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Don't just wear clothes, make a statement. Our streetwear
              collection is designed for those who dare to be different and
              embrace urban culture.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center rounded-lg bg-red-500 px-8 py-4 font-bold tracking-widest text-white transition-all duration-300 hover:bg-red-600"
              >
                <FiShoppingBag className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                SHOP NOW
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-bold tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                LEARN MORE
                <FiArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-red-500">50K+</div>
                <div className="text-sm text-gray-400">HAPPY CUSTOMERS</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-red-500">100+</div>
                <div className="text-sm text-gray-400">UNIQUE DESIGNS</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-red-500">24/7</div>
                <div className="text-sm text-gray-400">SUPPORT</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Streetwear Collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 rounded-full bg-red-500 px-4 py-2 font-bold tracking-wide text-white"
              >
                NEW DROP
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
