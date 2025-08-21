const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-black from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Hi, i am{' '}
            <span className="text-blue-600">sourav Mondal</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer crafting beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              View My Work
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero