import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { team } from '../data/team';

const Team = () => {
  return (
    <section id="team" className="bg-gray-50 py-20">
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
            MEET OUR TEAM
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            The creative minds and passionate individuals behind our streetwear
            revolution.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Member Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition-colors duration-200 hover:bg-white"
                    >
                      <FiInstagram className="h-5 w-5 text-black" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={`https://twitter.com/${member.social.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition-colors duration-200 hover:bg-white"
                    >
                      <FiTwitter className="h-5 w-5 text-black" />
                    </motion.a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="mb-4 font-medium tracking-wide text-red-500">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="rounded-3xl bg-black p-8 text-white lg:p-12">
            <h3 className="mb-6 text-3xl font-bold lg:text-4xl">
              JOIN OUR CREATIVE TEAM
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              Are you passionate about streetwear and urban culture? We're
              always looking for talented individuals who share our vision and
              want to make a difference in the fashion industry.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-red-500 px-8 py-4 font-bold tracking-widest text-white transition-colors duration-200 hover:bg-red-600"
            >
              VIEW OPENINGS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
