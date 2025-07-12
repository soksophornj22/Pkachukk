import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      info: 'hello@streetwear.com',
      href: 'mailto:hello@streetwear.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      info: '123 Street Ave, City, State 12345',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20">
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
            GET IN TOUCH
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Have questions about our products or want to collaborate? We'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-black">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500"
                    placeholder="Tell us more..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-black px-8 py-4 font-bold tracking-widest text-white transition-colors duration-200 hover:bg-red-500"
                >
                  <FiSend className="mr-2 h-5 w-5" />
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-black">
                Contact Information
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600">
                Ready to start a conversation? Reach out to us through any of
                these channels and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-600 transition-colors duration-200 hover:text-red-500"
                    >
                      {info.info}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <h4 className="mb-4 font-bold text-black">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-black p-6 text-white"
            >
              <h4 className="mb-4 font-bold">Follow Us</h4>
              <p className="mb-4 text-gray-300">
                Stay connected with us on social media for the latest updates,
                new releases, and behind-the-scenes content.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-red-500"
                >
                  <span className="text-sm font-bold">IG</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-red-500"
                >
                  <span className="text-sm font-bold">TW</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-red-500"
                >
                  <span className="text-sm font-bold">FB</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
