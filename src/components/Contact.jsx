'use client'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
 


const Contact = () => {

     const [copied, setCopied] = useState(false);
  const email = "abduofficial01@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
    
  return (
    <section id='contact' className='section py-14 md:py-20'>
      <div className='flex items-end justify-between mb-6'>
        <h2 className='title text-3xl md:text-5xl text-white'>Get in touch</h2>
        <p className='text-gray-400 text-sm md:text-base'>Demo links below — replace with your profiles.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <a href='https://www.linkedin.com/in/abdul-rahman-8bbb77262' aria-label='Open LinkedIn' className='glass rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors'>
          <FaLinkedin className='text-3xl text-white' />
          <MdArrowOutward className='text-2xl text-gray-300' />
        </a>
        <a href='#' aria-label='Open Resume' className='glass rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors'>
          <GrNotes className='text-3xl text-white' />
          <MdArrowOutward className='text-2xl text-gray-300' />
        </a>
        <div
      onClick={handleCopy}
      aria-label="Copy Email"
      className="glass rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer"
    >
      <GrMail className="text-3xl text-white" />
      {copied ? (
        <span className="text-sm text-green-400 font-medium">Copied!</span>
      ) : (
        <MdArrowOutward className="text-2xl text-gray-300" />
      )}
    </div>  
    <a href='https://github.com/Abdu1-Rahman' aria-label='Open GitHub' className='glass rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors'>
          <FaGithub className='text-3xl text-white' />
          <MdArrowOutward className='text-2xl text-gray-300' />
        </a>
      </div>
    </section>
  )
}

export default Contact