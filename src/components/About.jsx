import React from 'react'

const About = () => {
  return (
    <section id="about" className='section py-14 md:py-20'>
      <div className='grid md:grid-cols-2 gap-8 items-start'>
        <div>
          <h2 className='title text-3xl md:text-5xl text-white'>About</h2>
          <p className='text-gray-300 mt-4'>
            I’m 23 and currently building my path in UI/UX design. I started in web development, but over time I realized I was far more drawn to the creative and problem-solving side of digital products than to writing code. Layouts, user flows, and the way people interact with a product always caught my attention more than the technical details behind the scenes.

That clarity pushed me to shift into UI/UX. It’s the space where I can grow, think critically, and design experiences that feel natural and purposeful. I’m focused on improving my skills, understanding users, and creating products that are both usable and visually solid.
          </p>
        </div>
        <div className='glass rounded-2xl p-5'>
          <h3 className='text-white font-semibold'>Skills</h3>
          <div className='mt-3 flex flex-wrap gap-2'>
            {['Figma','Wireframing','Prototyping','UX Research','UI Design','User Testing','User Experience', 'Tailwind','html','css','js'].map(s => (
              <span key={s} className='px-3 py-1.5 rounded-lg text-xs bg-white/10 text-gray-200'>{s}</span>
            ))}
          </div>
          <div className='mt-5 grid grid-cols-3 gap-3'>
            {[
              {k:'Projects',v:'3+'},
              {k:'Experience',v:'1+ yrs'},
            ].map(stat => (
              <div key={stat.k} className='rounded-xl bg-white/5 p-4 text-center'>
                <div className='text-white text-xl font-semibold'>{stat.v}</div>
                <div className='text-gray-400 text-xs mt-1'>{stat.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About