import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  DivideIcon as LucideIcon,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const footerSections: FooterSection[] = [
  {
    title: "Shopify",
    links: [
      { label: "About us", href: "#" },
      { label: "Features", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Reviews", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Integrations", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "FAQ's", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Changelog", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Coming Soon", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Licensing", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Password", href: "#" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop: Company info and links in separate divs with space-between */}
        <div className="hidden md:flex justify-between">
          {/* Company info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Company Name</h2>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-blue-200"
                >
                  <social.icon className="w-6 h-6 cursor-pointer" />
                </a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="flex space-x-16">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-blue-200">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Grid layout */}
        <div className="md:hidden space-y-8">
          {/* Company info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Company Name</h2>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-blue-200"
                >
                  <social.icon className="w-6 h-6 cursor-pointer" />
                </a>
              ))}
            </div>
          </div>

          {/* Links in 2-column grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="hover:text-blue-200">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {footerSections.slice(2, 4).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="hover:text-blue-200">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-8 border-t border-blue-500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>Copyright © 2025 Yogasana Bharat. All rights reserved.</p>
            <p>Designed by Aman. Powered by Yogasana Bharat.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
