import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: 'VernaVitality – AI Nutrition Tracking System',
      tech: 'Next.js • React.js • Tailwind CSS • Groq AI',
      desc: 'AI-powered nutrition tracking application with chatbot support, meal recommendations, and voice interaction.',
    },
    {
      title: 'ProShield – Cybersecurity Platform',
      tech: 'HTML5 • CSS3 • JavaScript',
      desc: 'Responsive cybersecurity platform with optimized UI, accessibility, and cross-browser compatibility.',
    },
    {
      title: 'Advanced Portfolio Project',
      tech: 'React.js • GitHub • CSS',
      desc: 'Modern portfolio with animations, interactive project gallery, and responsive design.',
    },
  ];

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Java',
    'Git & GitHub',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-block px-5 py-2 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-sm tracking-wider shadow-lg">
            Frontend Developer • Fresher Portfolio
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-gray-300 to-purple-400 bg-clip-text text-transparent">
            Lathika V
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
            Passionate Frontend Developer focused on building responsive, elegant, and user-friendly web applications using React.js and modern frontend technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="mailto:lathikav24@gmail.com"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl"
            >
              Contact Me
            </a>

            <a
              href="https://linkedin.com/in/lathika-v0624"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white hover:text-black transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition duration-300 shadow-xl"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-8 text-lg">
            I am a Computer Science Engineering student with experience in frontend development, responsive web design, and UI optimization. I enjoy creating modern, accessible, and visually appealing interfaces that provide seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-6">Technical Skills</h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 text-sm font-medium hover:scale-105 transition duration-300 shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold mb-5">Projects</h2>
            <p className="text-gray-400 text-lg">
              Explore some of my frontend development and UI/UX projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7 shadow-2xl hover:-translate-y-3 hover:border-purple-400/40 transition duration-500"
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-sm text-purple-300 mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-300 leading-7">
                  {project.desc}
                </p>

                <button className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">Experience</h2>
        </div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:border-blue-400/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">
              Frontend Development Intern
            </h3>

            <p className="text-purple-300 mb-5">
              Nexila Technologies • 2024
            </p>

            <ul className="list-disc ml-5 text-gray-300 space-y-3 leading-7">
              <li>Built ProShield cybersecurity platform using HTML5, CSS3, and JavaScript.</li>
              <li>Improved cross-browser compatibility and frontend performance.</li>
              <li>Enhanced website responsiveness and UI optimization.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:border-blue-400/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">
              Web Development Intern
            </h3>

            <p className="text-purple-300 mb-5">
              CodSoft • 2024
            </p>

            <ul className="list-disc ml-5 text-gray-300 space-y-3 leading-7">
              <li>Developed responsive portfolio interfaces using JavaScript.</li>
              <li>Implemented mobile-first design strategies for better UX.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-5">Get In Touch</h2>

          <p className="text-gray-300 text-lg mb-12">
            Interested in working together? Feel free to contact me.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-2xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-2xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-2xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
