import React from 'react'
import profilePic from "../assets/profile.png";
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        whileInView={{x:0, opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:0.5, delay:0}}
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Hi I'm Jay Singhvi 👋
                    </motion.h1>
                    <motion.p
                        whileInView={{x:0, opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:0.5, delay:1}}
                        className='my-2 max-w-xl py-6 text-2xl'>
                        <ul>
                          <li>🔭 I build intelligent systems that blend data, design, and real-world impact</li>
                          <li>🌱 Exploring multi-modal learning, cloud deployment, and real-time AI applications</li>
                          <li>👨‍💻 Experienced in Python, R, SQL, TensorFlow, Scikit-learn, OpenCV, Streamlit, Power BI, and full-stack development</li>
                          <li>🚀 Passionate about solving real-world problems through NLP, recommender systems, predictive modeling, and automation</li>
                          <li>🎓 Studying Informatics & Data Science at UMass Amherst (GPA: 3.95), with a research background in secure medical AI</li>
                          <li>💡 Always looking to collaborate on projects where innovation, impact, and scalability meet</li>
                          <li>📫 Let’s connect — whether it’s for a project, a research idea, or just to geek out on AI!</li>
                        </ul>
                    </motion.p>
                </div>
            </div>
            <div className='lg:w-1/2 lg:p-8'>
                <div className='flex justify-end'>
                    <motion.img whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1, delay:1.2}} className='w-48 rounded-3xl shadow-2xl shadow-purple-950' src={profilePic} alt="profile_pic"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
