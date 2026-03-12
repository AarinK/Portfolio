import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'Manipal University Jaipur',
      degree: 'B.Tech Electronics and Communication Engineering',
      period: '2021 – 2025',
    },
    {
      institution: 'Amity International School, Noida',
      degree: 'CBSE Class XII',
      period: '2020 – 2021',
    },
  ];

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-400 font-semibold">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
