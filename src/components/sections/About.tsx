export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              i am a passionate full-stack developer with 3+ years of experience building modern web applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in React, Next.js, and Node.js, creating seamless user experiences and robust backend solutions.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-gray-500">Your Photo Here</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
