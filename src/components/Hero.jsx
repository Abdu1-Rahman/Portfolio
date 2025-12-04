import React from 'react'

const Hero = () => {
  return (
    <section className='section relative py-12 md:py-12'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
      </div>
      <div className='flex flex-col items-center text-center'>
        <h1 className='title text-4xl mt-6 md:mt-10 md:text-[6rem] leading-tight font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent'>
          UI/UX<br />Designer
        </h1>
        <p className='text-gray-300 text-lg md:text-2xl mt-4 md:mt-6 max-w-2xl'>
          <span className='text-white text-3xl'>Hello, I'm</span> <span className='text-white font-bold text-3xl'>Abdul Rahman</span> — a 💻developer evolving into 🌟UI/UX design to create cleaner, more intuitive digital experiences.
        </p>
        <div className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-3'>
          <a href="#projects" className='btn-primary'>View Projects</a>
          <a href="#contact" className='btn-secondary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero