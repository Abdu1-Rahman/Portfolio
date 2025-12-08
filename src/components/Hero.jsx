import React from 'react'

const Hero = () => {
  return (
    <section className='section relative py-12 md:py-12'>
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
      </div>
      <div className='flex flex-col items-center text-center relative'>
        {/* Curved greeting */}
        <div className='pointer-events-none absolute -top-4 left-0 md:-top-2 md:left-8 text-gray-200/80'>
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="arc" d="M10 100 C 80 10, 160 10, 210 95" stroke="#a78bfa" strokeWidth="1.5" fill="transparent" />
            <text fontSize="14" className="fill-white">
              <textPath href="#arc" startOffset="10%">Hello! I am <tspan className="fill-[#8b5cf6] font-semibold">Abdul Rahman</tspan></textPath>
            </text>
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
                <path d="M0,0 L6,3 L0,6 Z" fill="#a78bfa" />
              </marker>
            </defs>
            <path d="M205 94 L215 108" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arrow)" />
          </svg>
        </div>

        {/* Subheading */}
        <p className='text-gray-300/90 text-base md:text-lg tracking-wide mt-10 md:mt-16'>A Designer who</p>

        {/* Main headline */}
        <h1 className='mt-3 md:mt-5 font-extrabold leading-[1.1] text-4xl md:text-6xl lg:text-7xl text-white'>
          <span className='block'>Judges a book</span>
          <span className='block'>
            by its
            <span className='relative inline-block mx-2 align-baseline'>
              <span className='relative z-10 px-3 py-1 rounded-full text-white bg-[#6d28d9]/80'>cover</span>
              <span className='absolute inset-0 -rotate-6 scale-110 rounded-full ring-2 ring-[#8b5cf6]/80'></span>
            </span>
            ...
          </span>
        </h1>

        {/* Caption */}
        <p className='mt-3 md:mt-4 text-xs md:text-sm text-gray-300/80 max-w-md'>
          Because if the cover does not impress you what else can?
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