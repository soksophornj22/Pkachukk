import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import { FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';

import { FiChevronLeft, FiChevronRight, FiX, FiHeart } from 'react-icons/fi';

const FeaturedProducts = () => {
  const { addToCart, cartItems, incrementCartItem, decrementCartItem } =
    useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageIndexes, setImageIndexes] = useState({});

  const products = [
    {
      id: 1,
      title: 'Matte Liquid Lipstick',
      category: 'LIPSTICK',
      price: '$24.99',
      description:
        'Long-lasting matte lipstick with intense color payoff and comfortable wear.',
      images: [
        '/products/lipstick/506081074_18385946833191688_1107153102646360376_n.jpg',
        '/products/lipstick/506081074_18385946833191688_1107153102646360376_n.jpg',
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
      ],
      href: '#',
    },
    {
      id: 2,
      title: 'Glow Foundation',
      category: 'FOUNDATION',
      price: '$39.99',
      description:
        'Buildable foundation with natural finish and skincare benefits.',
      images: [
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
      ],
      href: '#',
    },
    {
      id: 3,
      title: 'Eyeshadow Palette',
      category: 'EYESHADOW',
      price: '$49.99',
      description:
        '18-shade palette with matte and shimmer finishes for endless looks.',
      images: [
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop',
      ],
      href: '#',
    },
    {
      id: 4,
      title: 'Mascara Volume',
      category: 'MASCARA',
      price: '$29.99',
      description:
        'Volumizing mascara that lifts and separates for dramatic lashes.',
      images: [
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
      ],
      href: '#',
    },
    {
      id: 5,
      title: 'Blush Duo',
      category: 'BLUSH',
      price: '$19.99',
      description:
        'Dual blush with matte and shimmer for a natural flush of color.',
      images: [
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop',
      ],
      href: '#',
    },
    {
      id: 6,
      title: 'Setting Spray',
      category: 'SKINCARE',
      price: '$34.99',
      description:
        'Long-lasting setting spray that keeps makeup in place all day.',
      images: [
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop',
      ],
      href: '#',
    },
  ];

  const nextImage = (productId) => {
    const product = products.find((p) => p.id === productId);
    const currentIndex = imageIndexes[productId] || 0;
    const nextIndex = (currentIndex + 1) % product.images.length;
    setImageIndexes((prev) => ({ ...prev, [productId]: nextIndex }));
  };

  const prevImage = (productId) => {
    const product = products.find((p) => p.id === productId);
    const currentIndex = imageIndexes[productId] || 0;
    const prevIndex =
      currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    setImageIndexes((prev) => ({ ...prev, [productId]: prevIndex }));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextModalImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProduct.images.length,
      );
    }
  };

  const prevModalImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1,
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevModalImage();
    if (e.key === 'ArrowRight') nextModalImage();
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="featured-products" className="bg-pink-50 py-20">
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
            FEATURED PRODUCTS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the latest beauty products from our collection. Premium
            quality, bold colors, and authentic beauty for every girl.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="box-border flex h-full flex-col overflow-hidden rounded-xl bg-white p-1 shadow transition-all duration-300 hover:shadow-2xl sm:p-4">
                {/* Product Image Container */}
                <div
                  className="relative mx-auto aspect-square w-full max-w-full cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openModal(product)}
                >
                  <img
                    src={product.images[imageIndexes[product.id] || 0]}
                    alt={product.title}
                    className="mx-auto box-border h-full max-h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:max-h-64"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-pink-500 px-3 py-1 text-xs font-bold tracking-widest text-white">
                      {product.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition-colors duration-200 hover:bg-white"
                    >
                      <FiHeart className="h-5 w-5 text-black" />
                    </motion.button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                    {product.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                          idx === (imageIndexes[product.id] || 0)
                            ? 'bg-white'
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between p-1 sm:p-4">
                  <h3 className="mb-1 line-clamp-2 text-xs font-bold text-gray-900 sm:text-lg">
                    {product.title}
                  </h3>
                  <p className="mb-2 line-clamp-2 text-[10px] text-gray-600 sm:text-sm">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-end justify-between">
                    <span className="text-base font-bold text-gray-900 sm:text-xl">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className="flex items-center rounded bg-pink-500 px-2 py-1 text-[10px] whitespace-nowrap text-white transition-colors duration-200 hover:bg-pink-600 sm:px-4 sm:py-2 sm:text-base"
                      >
                        <FiShoppingCart className="mr-1 h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="inline sm:hidden">Add</span>
                      </motion.button>
                      {getProductQuantity(product.id) > 0 && (
                        <div className="flex items-center gap-1">
                          <button
                            className="rounded-full bg-pink-100 p-1 text-xs text-pink-500 hover:bg-pink-200 sm:text-base"
                            onClick={(e) => {
                              e.stopPropagation();
                              decrementCartItem(product.id);
                            }}
                          >
                            <FiMinus />
                          </button>
                          <span className="w-5 rounded-full border border-pink-200 bg-white text-center text-xs font-bold text-pink-500 sm:w-6 sm:text-base">
                            {getProductQuantity(product.id)}
                          </span>
                          <button
                            className="rounded-full bg-pink-100 p-1 text-xs text-pink-500 hover:bg-pink-200 sm:text-base"
                            onClick={(e) => {
                              e.stopPropagation();
                              incrementCartItem(product.id);
                            }}
                          >
                            <FiPlus />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative h-auto max-h-[90vh] w-full max-w-full overflow-y-auto rounded-2xl sm:max-w-2xl lg:max-w-4xl">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-2 right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-200 hover:bg-pink-100 sm:top-4 sm:right-4"
              >
                <FiX className="h-8 w-8 text-pink-500" />
              </motion.button>

              {/* Modal Content */}
              <div className="overflow-hidden rounded-2xl bg-white p-2 sm:p-4 lg:p-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative flex aspect-square w-full items-center justify-center">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={selectedProduct.title}
                      className="h-48 w-full rounded-xl object-cover sm:h-64 lg:h-96"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevModalImage();
                      }}
                      className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-colors duration-200 hover:bg-white"
                    >
                      <FiChevronLeft className="h-6 w-6 text-black" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextModalImage();
                      }}
                      className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-colors duration-200 hover:bg-white"
                    >
                      <FiChevronRight className="h-6 w-6 text-black" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                      {selectedProduct.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                            idx === currentImageIndex
                              ? 'bg-black'
                              : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-center p-2 sm:p-4 lg:p-8">
                    <div className="mb-2 sm:mb-4">
                      <span className="rounded-full bg-pink-500 px-3 py-1 text-xs font-bold tracking-widest text-white">
                        {selectedProduct.category}
                      </span>
                    </div>
                    <h2 className="mb-2 text-xl font-bold text-black sm:mb-4 sm:text-3xl">
                      {selectedProduct.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
                      {selectedProduct.description}
                    </p>
                    <div className="mb-4 text-xl font-bold text-black sm:mb-6 sm:text-3xl">
                      {selectedProduct.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (selectedProduct) addToCart(selectedProduct);
                      }}
                      className="w-full rounded-lg bg-pink-500 py-3 font-bold tracking-widest text-white transition-colors duration-200 hover:bg-pink-600 sm:py-4"
                      disabled={!selectedProduct}
                    >
                      ADD TO CART
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProducts;
