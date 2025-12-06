import React from 'react'

const demoProjects = [
  {
    title: 'Penne Analytics Dashboard',
    description: 'A smart e-commerce management dashboard that gives store owners real-time insights into sales, inventory health, order flow, and customer behavior.',
    tags: ['UI/UX', 'Dashboard', 'E-commerce'],
    live: '#',
    code: '#',
  },
  {
    title: 'Penne Checkout Optimization',
    description: 'A focused UX redesign of the checkout experience to reduce friction, improve clarity, and increase trust during the purchase flow.',
    tags: ['UX Redesign', 'E-commerce', 'Usability'],
    live: '#',
    code: '#',
  },
  {
    title: 'Voyage — AI Trip Planner',
    description: 'An intelligent travel planning interface that helps users build personalized itineraries, compare routes, and collaborate with friends.',
    tags: ['UI/UX', 'Travel', 'Product Design'],
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
              <a className="btn-secondary" href={p.live} aria-label={`Open ${p.title} live`}>Case Study</a>
              <a className="btn-primary" href={p.code} aria-label={`Open ${p.title} code`}>Coming Soon</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
