import React from "react";
import { motion } from "framer-motion";
import { Camera, Video, Film, Edit2, Compass } from "lucide-react";

const specialtyIcons = {
  Photography: Camera,
  Videography: Video,
  Cinematography: Film,
  Editing: Edit2,
  "Drone Operations": Compass,
};

const TeamMember = ({ name, role, image, specialty, description, index }) => {
  const Icon = specialtyIcons[specialty] || Camera;

  return (
    <section
      id={`team-member-${index}`}
      className="h-[50dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 rounded-lg"
              whileHover={{ opacity: 0.3 }}
            />
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold mb-2 text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {name}
          </motion.h2>
          <motion.p
            className="text-xl text-indigo-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {role}
          </motion.p>
          <motion.p
            className="text-lg text-indigo-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Icon size={48} className="text-indigo-400 mx-auto md:mx-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
