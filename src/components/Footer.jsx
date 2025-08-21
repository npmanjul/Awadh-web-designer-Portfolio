import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Star,
  Award,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/toprank",
      color: "hover:text-white hover:bg-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/toprank",
      color: "hover:text-white hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/toprank",
      color:
        "hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address ",
      content: [
        "Sulabh Awas, A42/32, Sector 01,",
        "Gomti Nagar, Lucknow",
        "Uttar Pradesh, 226010",
      ],
    },
    {
      icon: MapPin,
      title: "Address",
      content: [
        "Shop no. 22/32,  ",
        "Sector 34D, Sector 32, ",
        "Chandigarh, 160022",
      ],
    },

    {
      icon: Phone,
      title: "Phone",
      content: ["+91 9305030523"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["connect@topranklucknow.com"],
    },
  ];

  return (
    <footer className="relative  border-t border-slate-800/50 overflow-hidden">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://topranklucknow.com/wp-content/uploads/2025/04/cropped-Top-Rank-Logo-removebg-preview.png"
                  alt="TopRank Digital Service"
                  className="h-12 md:h-15 w-auto"
                />
              </div>

              <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-lg">
                Transforming businesses through innovative digital solutions. We
                craft exceptional web experiences that drive growth and deliver
                measurable results.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-slate-700/50 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Enhanced Certifications */}
              <div className="flex justify-start items-center gap-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg backdrop-blur-sm w-auto">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-medium">
                    Verified Business
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-yellow-400 font-medium">
                    5.0 Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                Get in Touch
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.title} className="flex items-start gap-3">
                      <div className="p-2 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-medium text-white mb-2">
                          {info.title}
                        </h5>
                        <div className="space-y-1">
                          {info.content.map((item, index) => (
                            <p
                              key={index}
                              className="text-sm text-slate-400 hover:text-slate-300 transition-colors duration-300"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center text-center gap-4 text-sm text-slate-500">
                <p>© 2025 TopRank Digital Service. All rights reserved.</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
