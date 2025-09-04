import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Code2, Rocket } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

// declare particlesJS globally
declare global {
  interface Window {
    particlesJS?: (tagId: string, config: Record<string, any>) => void;
  }
}

export default function Hero({ onStartProject }: HeroProps) {
  const particlesInitialized = useRef(false);

  const initParticles = (color: string) => {
    window.particlesJS?.("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: color },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: color,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          random: true,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" } },
      },
      retina_detect: true,
    });
  };

  const setupParticles = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const color = isDark ? "#00DDFF" : "#4F46E5"; // cyan for dark, indigo for light

    if (window.particlesJS) {
      initParticles(color);
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => initParticles(color);
      document.head.appendChild(script);
    }
  };

  useEffect(() => {
    setupParticles();

    // watch for dark mode toggle
    const observer = new MutationObserver(() => {
      const container = document.getElementById("particles-js");
      if (container) container.innerHTML = "";
      setupParticles();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      const container = document.getElementById("particles-js");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-50 via-white to-purple-50 
      dark:from-gray-900 dark:via-gray-900 dark:to-purple-900"
    >
      {/* Particles background */}
      <div id="particles-js" className="absolute inset-0 z-0" />

      {/* Your existing content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Floating icons animation */}
          <div className="relative mb-8">
            <div className="absolute top-0 left-1/4 animate-bounce delay-100">
              <Code2 className="h-8 w-8 text-blue-500/30 dark:text-blue-400/30" />
            </div>
            <div className="absolute top-8 right-1/4 animate-bounce delay-300">
              <Rocket className="h-6 w-6 text-purple-500/30 dark:text-purple-400/30" />
            </div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce delay-500">
              <Sparkles className="h-10 w-10 text-green-500/30 dark:text-green-400/30" />
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 dark:bg-blue-900/20 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
              <Sparkles className="h-4 w-4 mr-2" />
              Professional Software Development
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent ">
                Digital Vision
              </span>
              Into Reality
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We craft exceptional web applications, websites, and provide
              ongoing maintenance to help your business thrive in the digital
              landscape.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={onStartProject}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Projects Delivered</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-200">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Support Available</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200">
                99%
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
