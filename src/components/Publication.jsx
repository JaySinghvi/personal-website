import React from 'react'
import { motion } from 'framer-motion'

const Publication = () => {
  return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Publication</motion.h2>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>December 2022</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://link.springer.com/chapter/10.1007/978-981-99-2264-2_17"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Cyber Security and Layering of Medical Data Using Machine Learning Algorithms</h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Co-authored a research paper published in <b>Applications and Techniques in Information Security</b> on <b>Springer Link</b></li>
                            <li className='mb-2'>Analyzed medical datasets for Hepatitis C and Diabetes from <b>1.5K+</b> patients, building and optimizing a disease prediction model using multiple machine learning methodologies like <b>Logistic Regression</b>, <b>SVM</b>, and <b>Gaussian Naive Bayes</b></li>
                            <li className='mb-2'>Achieved <b>94.308%</b> accuracy with <b>Gradient Boosting Classifier</b> for Hepatitis C prediction, showcasing machine learning’s impact on medical cybersecurity and faster disease diagnosis for doctors</li>                      
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Machine Learning</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Medical Data Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Model Evaluation</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
        </div>
  )
}

export default Publication