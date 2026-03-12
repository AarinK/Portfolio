import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Get In Touch
        </h2>
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <p className="text-gray-300 text-center mb-8 text-lg">
            I'm always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:aarin.kachroo@gmail.com"
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  aarin.kachroo@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919650063048"
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  +91 9650063048
                </p>
              </div>
            </a>

            <a
              href="https://github.com/AarinK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  github.com/AarinK
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/aarinkachroo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">
                  linkedin.com/in/aarinkachroo
                </p>
              </div>
            </a>
          </div>
        </div>

        <footer className="mt-20 text-center space-y-4">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/AarinK"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/aarinkachroo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
          <p className="text-gray-500">
            Designed & Built by Aarin Kachroo
          </p>
          <p className="text-gray-600 text-sm">
            © 2025 All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
