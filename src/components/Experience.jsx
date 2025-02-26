import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Professional Journey</motion.h2>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>May 2024 - August 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://app.moonshotpirates.com/voting/climate-24?team=1715422576809x820019839363973100"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Software Engineer - <span className='text-2xl text-white'>Moonshot Pirates</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Led the development of the <b>Django-based web app</b> to compete with <b>5000+</b> students globally in the Shape the Future hackathon, tackling disaster management solutions</li>
                            <li className='mb-2'>Used <b>Python</b>, <b>SQL</b> and <b>Javascript</b> to enable real-time aid monitoring, team deployment, and resource management</li>
                            <li className='mb-2'>Recognized as <b>Top 20</b> most impactful solutions by Moonshot Pirates for its potential real-world impact in disaster relief and crisis management</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Web Application Development</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Database Management</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Crisis Management</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Hackathon</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>November 2023 - January 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://www.thepillar.app/"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Director of Growth - <span className='text-2xl text-white'>The Pillar App</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Spearheaded social media growth for The Pillar App, a startup focused on personal development, aiming to boost engagement and brand visibility</li>
                            <li className='mb-2'>Crafted content using <b>CapCut</b> for videos, <b>Python</b> for data analysis, <b>NLTK</b> for sentiment analysis, and <b>SQL</b> for data management and optimized performance with <b>Tableau</b> for visualization and <b>Google Analytics</b> for tracking</li>
                            <li className='mb-2'>Drove a <b>200%</b> increase in engagement across social media platforms over 3 months, successfully onboarding <b>500+</b> users and significantly improving brand recognition and community loyalty</li>                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Digital Marketing</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Content Creation</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Sentiment Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>User Acquisition</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>June 2022 - August 2022</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://github.com/JaySinghvi/Data-Analyst-Internship-Excelerate"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Marketing Data Analyst - <span className='text-2xl text-white'>Excelerate</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Optimized social-media ad campaigns alongside <b>7+ stakeholders</b> to increase user engagement data and reduce ad spend</li>
                            <li className='mb-2'>Used <b>Python</b> to analyze user data, implemented <b>Power BI</b> dashboards to create interactive visualizations, and designed impactful reports with <b>Canva/Figma</b>, to discontinue underperforming campaigns</li>
                            <li className='mb-2'>Achieved a <b>33%</b> growth in user engagement while forecasting the revenue saving in marketing operations of <b>$57K+</b> quarterly</li>
                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ad-Optimization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Stakeholder Collaboration</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Cost Reduction</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>May 2021 - September 2021</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://github.com/JaySinghvi/Full-Stack-Web-Development-Internship"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Full Stack Web Developer - <span className='text-2xl text-white'>Edureka</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Developed an <b>interactive website</b> for Covid-19 impacted K-12 students, to help teachers upload courses and assignments, and enable students to access and download content, easing teacher-student communication</li>
                            <li className='mb-2'>Built accessible features with <b>React.js</b>, implemented server-side functionality using <b>Express.js</b> and <b>Node.js</b>, and managed user profile data with <b>MySQL</b>, ensuring platform accessibility with <b>WCAG</b> guidelines</li>
                            <li className='mb-2'>Deployed the platform with <b>2K+</b> active students, enhancing student engagement and learning flexibility</li>                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Full Stack Web Development</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>UI/UX Design</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Deployment & Scalability</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>EdTech Solutions</span>
                        </div>            

                    </motion.div>
                </div>
            </div>

        </div>
  )
}

export default Experience
