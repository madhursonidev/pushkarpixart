import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useSmoothScroll } from "./hooks/useSmoothScroll";
import TeamMember from "./TeamMembers";

const teamMembers = [
  {
    name: "Pushkar Soni",
    role: "Lead Photographer",
    image:
      "https://scontent.fbom38-1.fna.fbcdn.net/v/t39.30808-6/449398493_991352379669760_7022693162507758414_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=k0f_JjQKrpkQ7kNvgEcssdX&_nc_zt=23&_nc_ht=scontent.fbom38-1.fna&_nc_gid=A-98nQEOuv-7I4zyDykYgER&oh=00_AYAIpsYqTLEg9rdoNAYgyWuc54qMzcfZLy7jEox6WxVdFg&oe=676E1B8A",
    specialty: "Photography",
    description:
      "Alice specializes in capturing breathtaking landscapes and intimate portraits that tell a story.",
  },
  {
    name: "Bob Smith",
    role: "Senior Videographer",
    image: "https://images.unsplash.com/photo-1619955529838-9ac4b1664a52?w=500",
    specialty: "Videography",
    description:
      "Bob's expertise lies in creating compelling video content that engages and inspires audiences.",
  },
  {
    name: "Carol Davis",
    role: "Cinematographer",
    image: "https://images.unsplash.com/photo-1595859703065-2259982784bb?w=500",
    specialty: "Cinematography",
    description:
      "Carol brings stories to life through her masterful use of lighting and camera techniques.",
  },
  {
    name: "David Wilson",
    role: "Lead Editor",
    image:
      "https://plus.unsplash.com/premium_photo-1663047699138-3f18f53aa36f?w=500",
    specialty: "Editing",
    description:
      "David's keen eye for detail and rhythm brings out the best in every piece of footage.",
  },
  {
    name: "Eva Martinez",
    role: "Drone Specialist",
    image: "https://images.unsplash.com/photo-1658505470097-4b7d8f67fa9a",
    specialty: "Drone Operations",
    description:
      "Eva captures stunning aerial footage that adds a new dimension to our productions.",
  },
];

const OurTeam = () => {
  useSmoothScroll();

  return (
    <div className="relative">
      <motion.h1
        className="text-5xl font-bold text-center text-indigo-100 pt-20 sticky top-20 z-10 bg-gradient-to-b from-indigo-900 to-transparent pb-32"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h1>
      {teamMembers.map((member, index) => (
        <TeamMember key={member.name} {...member} index={index} />
      ))}
      {/* <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-20">
          {teamMembers.map((_, index) => (
            <a
              key={index}
              href={`#team-member-${index}`}
              className="block w-3 h-3 mb-4 bg-indigo-400 rounded-full hover:bg-indigo-200 transition-colors duration-200"
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </nav> */}
    </div>
  );
};

export default OurTeam;
