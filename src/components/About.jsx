import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiAward, FiUsers } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description:
        'To empower every girl to express her unique beauty and confidence through premium makeup products.',
    },
    {
      icon: FiHeart,
      title: 'Our Passion',
      description:
        "We're passionate about beauty, creativity, and helping girls feel beautiful inside and out.",
    },
    {
      icon: FiAward,
      title: 'Quality First',
      description:
        'Every product is crafted with premium ingredients and dermatologist-tested formulas.',
    },
    {
      icon: FiUsers,
      title: 'Community',
      description:
        'Building a global community of beauty enthusiasts who share our values and vision.',
    },
  ];

  return (
    <section id="about" className="bg-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              OUR STORY
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Born from a passion for beauty and self-expression, our brand
              represents more than just makeup. We're a movement that celebrates
              natural beauty, creativity, and the power of confidence.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Since our founding, we've been committed to creating beauty
              products that don't just enhance beauty but empower it. Every
              product tells a story, every shade has purpose, and every
              collection reflects the vibrant energy of beauty culture.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-pink-500 px-8 py-4 font-bold tracking-widest text-white transition-colors duration-200 hover:bg-pink-600"
            >
              LEARN MORE
            </motion.button>
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
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop"
                alt="Beauty Culture"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-pink-900/20"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">10+</div>
                <div className="text-sm text-gray-600">YEARS OF BEAUTY</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              OUR VALUES
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do and every product we
              create.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500 text-white transition-colors duration-300 group-hover:bg-purple-500"
                >
                  <value.icon className="h-8 w-8" />
                </motion.div>
                <h4 className="mb-4 text-xl font-bold text-gray-900">
                  {value.title}
                </h4>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-pink-900 to-purple-900 p-8 text-white lg:p-12"
        >
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-pink-400 lg:text-5xl">
                100K+
              </div>
              <div className="text-sm tracking-wide text-gray-300">
                HAPPY CUSTOMERS
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-pink-400 lg:text-5xl">
                200+
              </div>
              <div className="text-sm tracking-wide text-gray-300">
                BEAUTY PRODUCTS
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-pink-400 lg:text-5xl">
                25+
              </div>
              <div className="text-sm tracking-wide text-gray-300">
                COUNTRIES
              </div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-pink-400 lg:text-5xl">
                10+
              </div>
              <div className="text-sm tracking-wide text-gray-300">YEARS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
