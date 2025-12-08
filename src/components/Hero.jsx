import React from 'react'

const Hero = () => {
  return (
    <section className='section relative py-20 md:py-28 overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18),rgba(139,92,246,0.07)_35%,transparent_65%)]"></div>
        <div className="absolute right-4 top-8 md:right-16 md:top-14 glass rounded-2xl p-4 shadow-xl shadow-purple-900/20 border-purple-400/10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-400/80"></span>
            <span className="h-2 w-8 rounded bg-white/30"></span>
          </div>
          <div className="mt-3 h-20 w-40 md:w-48 rounded-xl bg-white/5 border border-white/10"></div>
          <div className="mt-3 flex gap-2">
            <span className="h-5 w-12 rounded bg-white/10"></span>
            <span className="h-5 w-16 rounded bg-purple-500/30"></span>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center text-center relative'>

        {/* Subheading */}
        <p className='text-white/85 text-sm md:text-base tracking-wide mt-8 md:mt-12'>Hi!, I'm Abdul Rahman</p>

        {/* Main headline */}
        <h1 className='mt-4 md:mt-6 font-extrabold leading-[1.08] text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] text-white'>
          <span className='block'>Breaking into UI/UX with</span>
          <span className='block'>
            a mindset for usability and
            <span className='relative inline-block mx-2 align-baseline'>
              <span className='relative z-10 px-3 py-1 rounded-full text-white/95'>clarity</span>
              <span className='absolute inset-0 -rotate-3 scale-110 rounded-full border border-[#8b5cf6]/70'></span>
              <span className='absolute -inset-1 rounded-full bg-[#8b5cf6]/25 blur-xl opacity-60'></span>
            </span>
            ...
          </span>
        </h1>

        {/* Caption */}
        <p className='mt-4 md:mt-5 text-sm md:text-base text-white/70 max-w-xl'>
          I design with curiosity, simplicity, and function in mind.
        </p>

        {/* Actions */}
        <div className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-3'>
          <a href="#projects" className='btn-primary'>View Projects</a>
          <a href="#contact" className='btn-secondary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero