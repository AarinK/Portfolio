import { Briefcase, TrendingUp } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'National Informatics Centre (NIC)',
      role: 'Software Engineering Intern',
      period: 'Jan 2025 – Jun 2025',
      description: 'Building secure authentication systems for government scale',
      achievements: [
        'Built centralized authentication service supporting JWT SSO and MFA handling 1000+ concurrent requests',
        'Integrated OAuth2 login with LDAP directory authentication',
        'Designed 10+ REST APIs for login, token issuance, refresh, validation and RBAC',
        'Improved authentication reliability and reduced login failures by 30%',
      ],
      highlight: 'Designed and implemented a centralized authentication service supporting SSO, MFA, and OAuth2-based login flows, enabling secure access across multiple government systems while maintaining reliability under high concurrent usage.',
    },
    {
      company: 'Veersa Technologies',
      role: 'Frontend Developer Intern',
      period: 'May 2024 – Jul 2024',
      description: 'Scaling frontend architecture for enterprise applications',
      achievements: [
        'Built CRM frontend using React and TypeScript',
        'Integrated 15+ REST APIs with comprehensive error handling',
        'Built reusable UI components reducing duplicate UI code by 25%',
        'Optimized rendering with improved state management patterns',
      ],
      highlight: 'Developed reusable React components and API integration patterns that streamlined frontend development and reduced duplicated UI logic across the CRM platform.',
    },
    {
      company: 'Veersa Technologies',
      role: 'Software Developer Intern',
      period: 'Jun 2023 – Aug 2023',
      description: 'Exploring full-stack development across platforms',
      achievements: [
        'Built productivity dashboard for Microsoft Teams using React and Tailwind',
        'Developed React Native mobile proof-of-concept app',
        'Implemented responsive design patterns across web and mobile',
      ],
      highlight: 'Prototyped a cross-platform productivity solution using React and React Native, demonstrating the feasibility of shared architecture across web and mobile environments.',
    },
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Professional Journey
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black hidden md:block shadow-lg shadow-blue-500/50" />

                <div className="glass-card p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                      <p className="text-gray-300 text-sm mt-3">{exp.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

<div className="pt-6 border-t border-gray-800 bg-[#111827] p-4 rounded-lg mt-6">                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 italic">{exp.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
