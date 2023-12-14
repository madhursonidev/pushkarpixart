import React from "react";

const FooterSection = ({ title, links }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: "About",
      links: [
        { url: "#", text: "Company" },
        { url: "#", text: "Team" },
        { url: "#", text: "Careers" },
        { url: "#", text: "Contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { url: "#", text: "Service 1" },
        { url: "#", text: "Service 2" },
        { url: "#", text: "Service 3" },
        { url: "#", text: "Service 4" },
      ],
    },
    {
      title: "Resources",
      links: [
        { url: "#", text: "Blog" },
        { url: "#", text: "Ebooks" },
        { url: "#", text: "FAQs" },
        { url: "#", text: "Support" },
      ],
    },
    {
      title: "Connect",
      links: [
        { url: "#", text: "Facebook" },
        { url: "#", text: "Twitter" },
        { url: "#", text: "Instagram" },
        { url: "#", text: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Website Name. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
