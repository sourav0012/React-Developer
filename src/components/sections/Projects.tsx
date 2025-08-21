export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Project {project}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Title {project}</h3>
                <p className="text-gray-600 mb-4">Brief project description here...</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects