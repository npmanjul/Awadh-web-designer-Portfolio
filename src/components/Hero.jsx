import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-14"
    >
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-animate="hero"
        >
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">
                Available for new projects
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-4">We Build</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-4xl mx-auto">
            Transforming visionary ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              exceptional digital experiences
            </span>{" "}
            through strategic innovation and cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Our Work
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 border border-slate-600 rounded-xl text-slate-300 font-semibold hover:border-blue-400 hover:text-white transform transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
            </button>
          </div>

          {/* Elegant Scroll Indicator */}
          <div className="animate-bounce-elegant">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-scroll-dot"></div>
            </div>
          </div>
          <div id="about"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
