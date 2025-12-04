import React from 'react'

const demoProjects = [
  {
    title: 'Analytics Dashboard',
    description: 'A responsive dashboard with charts and real-time KPIs.',
    tags: ['Next.js', 'Tailwind', 'Recharts'],
    live: '#',
    code: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'Beautiful storefront pages with cart and checkout flow.',
    tags: ['React', 'Stripe', 'UI'],
    live: '#',
    code: '#',
  },
  {
    title: 'SaaS Marketing Site',
    description: 'Landing pages with blog, pricing, and contact forms.',
    tags: ['Next.js', 'SEO', 'Content'],
    live: '#',
    code: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section py-14 md:py-20">
      <div className="flex items-end justify-between mb-8">
        <h2 className="title text-3xl md:text-5xl text-white">Projects</h2>
        <a href="#" className="text-blue-400 hover:text-blue-300">View all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProjects.map((p, idx) => (
          <div key={idx} className="glass rounded-2xl p-5 flex flex-col h-full">
            <div className="h-36 mb-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
            <h3 className="text-white text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded-lg text-xs bg-white/10 text-gray-200">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a className="btn-secondary" href={p.live} aria-label={`Open ${p.title} live`}>Live</a>
              <a className="btn-primary" href={p.code} aria-label={`Open ${p.title} code`}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
