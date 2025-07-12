import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, incrementCartItem, decrementCartItem, removeFromCart } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-end bg-black/40"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200"
            >
              <FiX className="h-6 w-6" />
            </button>
            <h2 className="mb-6 text-2xl font-bold text-pink-500">Your Cart</h2>
            {cartItems.length === 0 ? (
              <div className="text-gray-500">Your cart is empty.</div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-16 w-16 rounded border object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">{item.price}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          className="rounded-full bg-pink-100 p-1 text-pink-500 hover:bg-pink-200"
                          onClick={() => decrementCartItem(item.id)}
                        >
                          <FiMinus />
                        </button>
                        <span className="w-6 text-center font-bold">
                          {item.quantity}
                        </span>
                        <button
                          className="rounded-full bg-pink-100 p-1 text-pink-500 hover:bg-pink-200"
                          onClick={() => incrementCartItem(item.id)}
                        >
                          <FiPlus />
                        </button>
                        <button
                          className="ml-4 rounded-full bg-red-100 p-1 text-red-500 hover:bg-red-200"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
