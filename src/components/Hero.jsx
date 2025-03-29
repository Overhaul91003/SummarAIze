import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='SummarAIze_logo' className='w-40 object-contain' />

      </nav>

      <h1 className='head_text'>
      Too Long? Let 
      <br className="max-md:hidden" />
      <span className='text-gradient'>OpenAI GPT-4</span> Summarize It for You!
      </h1>
      <h2 className='desc'>
      Simplify your reading with SummarAIze, an open-source article summarizer
      that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
