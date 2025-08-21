export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">letss Connect</h3>
                <p className="text-gray-300">
                  i am always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">📧</span>
                  your.email@example.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">📱</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">📍</span>
                  Your City, Country
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact