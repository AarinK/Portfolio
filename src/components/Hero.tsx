import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-12">
      <div className="max-w-6xl mx-auto w-full animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 order-2 md:order-1 z-10 isolate">
            
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
                  Aarin Kachroo
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-300 font-semibold">
                Full-Stack Developer
              </h2>

              <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide">
                Lightweight Apps • API Security • Scalable Systems
              </p>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
              I build secure, scalable  systems and backend architecture.
              My work across government and startup environments has shaped my approach
              to API security and robust system design.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              From designing REST APIs to building Web Apps,
              I focus on solutions that are secure, performant, and maintainable.
            </p>

            {/* TECH STACK CHIPS */}
            <div className="flex flex-wrap gap-2 pt-2 z-10">
              {["Node.js","Python","Django","React","PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm rounded-full bg-[#0d0d0d] border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToExperience}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="relative z-10">Explore My Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 border-2 border-blue-500 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>

              <a
                href={`${import.meta.env.BASE_URL}Aarin_Kachroo_Resume.pdf`}
                download
                className="px-6 py-3 border border-purple-500 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 text-center"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/AarinK"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/aarinkachroo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end z-10">
            <div className="relative -mt-24 z-10 isolate">
              
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-30 animate-pulse z-0" />

              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}1722513173005.jpg`}
                alt="Aarin Kachroo"
                className="relative w-72 h-96 md:w-80 md:h-full object-cover rounded-2xl shadow-2xl border border-white/10 z-10"
              />

              {/* Scroll Button */}
              <button
                onClick={scrollToExperience}
                className="absolute mt-10 bottom-700 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group z-20"
              >
                <span className="text-xs tracking-widest text-gray-400 group-hover:text-blue-400 transition">
                  SCROLL
                </span>

                <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center items-start p-1 group-hover:border-blue-400 transition">
                  <div className="w-1.5 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
