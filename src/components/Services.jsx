import { motion } from 'framer-motion';
import { FiShield, FiTruck, FiRefreshCw, FiHeadphones } from 'react-icons/fi';
import { services } from '../data/services';

const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'quality':
        return <FiShield className="h-8 w-8" />;
      case 'shipping':
        return <FiTruck className="h-8 w-8" />;
      case 'returns':
        return <FiRefreshCw className="h-8 w-8" />;
      case 'support':
        return <FiHeadphones className="h-8 w-8" />;
      default:
        return <FiShield className="h-8 w-8" />;
    }
  };

  return (
    <section className="bg-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            WHY CHOOSE US
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We're committed to providing the best beauty experience with premium
            quality cosmetics and exceptional beauty support.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} mb-6 text-white transition-colors duration-300 group-hover:bg-pink-500`}
                >
                  {getIcon(service.icon)}
                </motion.div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-pink-900 to-purple-900 p-8 text-white lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold lg:text-4xl">
                JOIN THE BEAUTY REVOLUTION
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-200">
                Be part of a community that values natural beauty, creativity,
                and self-expression. Get exclusive access to new products and
                beauty tips.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-pink-500 px-8 py-4 font-bold tracking-widest text-white transition-colors duration-200 hover:bg-pink-600"
              >
                JOIN NOW
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-pink-400">
                  24/7
                </div>
                <div className="text-sm text-gray-300">BEAUTY SUPPORT</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-pink-400">
                  100%
                </div>
                <div className="text-sm text-gray-300">CRUELTY FREE</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-pink-400">30</div>
                <div className="text-sm text-gray-300">DAY RETURNS</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-pink-400">
                  FREE
                </div>
                <div className="text-sm text-gray-300">SHIPPING</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
