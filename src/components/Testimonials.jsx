import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-black lg:text-5xl">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Don't just take our word for it. Here's what our community has to
            say about our streetwear.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-200 hover:bg-gray-50"
          >
            <FiChevronLeft className="h-6 w-6 text-black" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-200 hover:bg-gray-50"
          >
            <FiChevronRight className="h-6 w-6 text-black" />
          </motion.button>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-gray-50 p-8 lg:p-12"
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="mb-6 flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <FiStar
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 text-xl leading-relaxed text-gray-800 italic lg:text-2xl">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold text-black">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-black">4.9/5</div>
            <div className="text-gray-600">AVERAGE RATING</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-black">98%</div>
            <div className="text-gray-600">SATISFACTION RATE</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-black">10K+</div>
            <div className="text-gray-600">REVIEWS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
