import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-10 py-10">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400">
        <p className="text-sm">© {new Date().getFullYear()} Abdul Rahman. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
