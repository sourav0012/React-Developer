export const Skills = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
    'PostgreSQL', 'Tailwind CSS', 'GSAP', 'Git', 'Docker', 'AWS'
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-blue-50 p-6 rounded-lg text-center transition-colors duration-300 border-2 border-transparent hover:border-blue-200"
            >
              <span className="text-lg font-medium text-gray-900">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills