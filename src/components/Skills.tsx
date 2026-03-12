export default function Skills() {
  const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)','Python', 'SQL' ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Frameworks',
    skills: [
      'Node.js',
      'Express.js',
      'Django',
      'Django REST Framework',
      
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Security & Architecture',
    skills: [
      'REST API Design',
      'Authentication',
      'RBAC',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Django ORM', 'Query Optimization'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'React Native', 'Tailwind CSS'],
    color: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Apache DS',
      'Unit Testing',
      'API Testing',
    ],
    color: 'from-blue-500 to-purple-500',
  },
];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3
                className={`text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-md bg-[#111827] border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}