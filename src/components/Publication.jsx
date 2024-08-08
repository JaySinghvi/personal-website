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
                            <li className='mb-2'>Co-authored a paper with 3 peers under the mentorship of 2 professors, demonstrating the deployment of data layers on medical data, published in the book titled ”Applications and Techniques in Information Security” on Springer Link.</li>
                            <li className='mb-2'>Developed a disease prediction model to present current and potential future trends of Chronic Hepatitis C and Diabetes.</li>
                            <li className='mb-2'>Examined the accuracy of 7 machine learning algorithms: Logistic Regression, Decision Tree Classifier, Random Forest Classifier, K-Neighbors Classifier, Gradient Boosting Classifier, SVM, and Gaussian Naive Bayes Classifier.</li>
                            <li className='mb-2'>Found the Gradient Boosting Classifier to be the most effective model, achieving 94.308% accuracy for predicting Hepatitis C, while additional patient data was required for Diabetes prediction.</li>
                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Machine Learning</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Accuracy</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Collaborative Research</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Model Evaluation</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
        </div>
  )
}

export default Publication