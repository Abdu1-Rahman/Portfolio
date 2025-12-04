'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='sticky top-0 z-[1000] w-full'>
      <div className='section mt-4 md:mt-6'>
        <div className='glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between relative'>
          <div className='flex gap-3 items-center'>
            <Image src="/images/Logo.png" alt="logo" className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' width={50} height={50} />
          </div>
          <div className='flex items-center'>
            <ul className='hidden md:flex gap-6 lg:gap-10 items-center text-gray-300'>
              <li><Link className='hover:text-white transition-colors' href="#about">About</Link></li>
              <li><Link className='hover:text-white transition-colors' href="#projects">Projects</Link></li>
              <li><Link className='hover:text-white transition-colors' href="#contact">Contact</Link></li>
            </ul>
            <button
              aria-label='Open menu'
              className='md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20'
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className='block w-5 h-0.5 bg-gray-300 mb-1'></span>
              <span className='block w-5 h-0.5 bg-gray-300 mb-1'></span>
              <span className='block w-5 h-0.5 bg-gray-300'></span>
            </button>
          </div>
          {menuOpen && (
            <div className='absolute right-3 top-full mt-2 w-44 rounded-xl glass p-2 md:hidden z-[110]'>
              <ul className='flex flex-col gap-1 text-gray-300'>
                <li>
                  <Link className='block w-full px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition'
                    href="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='block w-full px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition'
                    href="/projects" onClick={() => setMenuOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className='block w-full px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition'
                    href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar