import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Professional Journey</motion.h2>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>July 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://github.com/JaySinghvi/Quantitative-Research"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Quantitative Research Intern - <span className='text-2xl text-white'>JP Morgan Chase & Co.</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Successfully completed a comprehensive simulation designed to enhance quantitative research methods, focusing on real-world financial scenarios and data analysis.</li>
                            <li className='mb-2'>Conducted in-depth analysis of a book of loans, employing statistical techniques to estimate customers' probability of default, contributing to risk management strategies.</li>
                            <li className='mb-2'>Utilized dynamic programming to transform FICO scores into categorical data, improving the accuracy of predictive models for loan defaults.</li>
                            <li className='mb-2'>Developed a logistic regression model to classify default risks, providing actionable insights for financial decision-making processes.</li>
                            <li className='mb-2'>Gained practical experience with financial modeling, statistical analysis, and data-driven decision-making, enhancing my quantitative research skills.</li>
                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Dynamic Programming</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Modeling</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Risk Management</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Quantitative Analysis</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>May 2024 - June 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://app.moonshotpirates.com/voting/climate-24?team=1715422576809x820019839363973100"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Future Shaper - <span className='text-2xl text-white'>Moonshot Pirates</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Led the development of TerraLink, a web application for the Shape the Future Challenge, a worldwide competition to present innovative ideas for combating climate change.</li>
                            <li className='mb-2'>Designed and implemented features using Django, including disaster reporting, resource allocation, and real-time disaster updates.</li>
                            <li className='mb-2'>Created and distributed 4 surveys with tailored questions to disaster response teams, NGOs, government agencies, and the public to gather diverse perspectives and data.</li>
                            <li className='mb-2'>Recorded and presented a video explaining TerraLink’s functionality and the Shape the Future Challenge objectives, which was posted as a YouTube Shorts on their channel.</li>
                            <li className='mb-2'>Demonstrated strong analytical thinking, problem-solving skills, and effective communication in presenting project outcomes to the board, following collaboration with four team members globally</li>
                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Django</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Collection</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Video Presentation</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Global Collaboration</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Problem Solving</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>July 2023 - August 2023</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://github.com/JaySinghvi/Data-Analyst-Internship-Excelerate"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Data Analyst - <span className='text-2xl text-white'>Excelerate</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Collaborated with 7 data analysts globally to optimize Facebook ads, achieving a 50% reduction in ad spend.</li>
                            <li className='mb-2'>Conducted data analysis and created visualizations using Python to recommend ad discontinuation, enhancing campaign efficiency.</li>
                            <li className='mb-2'>Awarded a $ 1000 scholarship and a star performer badge by Saint Louis University for outstanding performance during the internship.</li>
                            <li className='mb-2'>Presented final analysis and recommendations to the HR department, demonstrating effective communication and presentation skills.</li>
                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ad-Optimization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Global Collaboration</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Award Recognition</span>
                        </div>            

                    </motion.div>
                </div>
            </div>

        </div>
  )
}

export default Experience
