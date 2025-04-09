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
          <li>🔭 I build intelligent systems that blend data, design, and real-world impact</li>
          <li>🌱 Exploring multi-modal learning, cloud deployment, and real-time AI applications</li>
          <li>👨‍💻 Experienced in Python, R, SQL, TensorFlow, Scikit-learn, OpenCV, and full-stack development</li>
          <li>🚀 Passionate about NLP, recommenders, predictive modeling, and automation</li>
          <li>🎓 Studying Data Science at UMass Amherst (GPA: 3.95) with research in medical AI</li>
          <li>💡 Open to building scalable, innovative solutions through collaboration</li>
          <li>📫 Let’s connect - for projects, research, or AI-geek convos!</li>
        </motion.ul>

      </div>
    </div>
  )
}

export default Hero;
