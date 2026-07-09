import React from 'react'
import profilePic from "../assets/profile.png";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-col items-center'>
        
        {/* Centered Heading */}
        <motion.h1 
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className='text-center text-5xl font-thin tracking-tight mt-16 lg:text-7xl w-full'
        >
          Hi, I'm Jay Singhvi 👋
        </motion.h1>

        {/* Bullet Points Left Aligned */}
        <motion.ul
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='w-full max-w-5xl text-left py-10 px-4 text-xl leading-relaxed space-y-3'
        >
          
          <li>🔭 I build end-to-end AI and ML systems from prototype to production.</li>
          <li>🤖 Data Scientist / ML Engineer / AI Engineer</li>
          <li>🛠️ Stack: Python, R, SQL, PyTorch, XGBoost, LLMs, RAG, LangChain, LangGraph, Hugging Face</li>
          <li>💼 Recent work: an autonomous voice-calling agent for QA-ing AI phone systems, three XGBoost disaster-forecasting models for climate-tech, and an LLM-integrated credit-default risk model with compliance-aligned decision notices</li>
          <li>🎓 BS Informatics, Data Science from UMass Amherst (GPA 3.8)</li>
          <li>📄 Published research on privacy-preserving ML for healthcare (Springer, ATIS 2021)</li>
          <li>📬 Open to full-time DS, ML, and AI Engineer roles at startups and growing companies so let's connect</li>
        </motion.ul>

      </div>
    </div>
  )
}

export default Hero;
