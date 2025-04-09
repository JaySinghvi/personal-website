import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Professional Journey 👨‍💼</motion.h2>
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
                            <a href="https://app.moonshotpirates.com/voting/climate-24?team=1715422576809x820019839363973100"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Machine Learning Engineer Intern - <span className='text-2xl text-white'>Moonshot Pirates</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Developed a disaster response system that <b>reduced emergency response time by 30%</b> and <b>improved aid accuracy by 25%</b>, combining geospatial modeling, real-time impact forecasting, and resource allocation into a cohesive platform for emergency teams</li>
                            <li className='mb-2'>Created and deployed an interactive dashboard that <b>visualized over 1,000 disaster scenarios</b>, enabling faster, data-backed decisions and <b>improving emergency coordination by 40%</b> through real-time risk mapping, geospatial overlays, and alert-based prioritization</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Predictive Modeling</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Simulation & Risk Mapping</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Dashboard Development</span>
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
                            <a href="https://www.thepillar.app/"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Machine Learning Intern - <span className='text-2xl text-white'>Boulevard Legacy LLC</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Implemented a sentiment analysis pipeline to uncover users’ emotional patterns from their interactions, resulting in smarter content decisions and driving a <b>200% engagement increase</b> across high-performing video campaigns by aligning content with user behavior</li>
                            <li className='mb-2'>Designed automated dashboards by integrating Tableau, SQL workflows, and different analytics tools to enable the monitoring of user behavior trends, resulting in the <b>onboarding of 500+ new users</b> through personalized recommendations and content distribution</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Sentiment Analysis & NLP</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>User Behavior Analytics</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Personalized Recommendation Systems</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Content Optimization</span>
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
                            <a href="https://github.com/JaySinghvi/Data-Analyst-Internship-Excelerate"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Data Science Intern- <span className='text-2xl text-white'>Excelerate</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Analyzed marketing performance data <b>across 7+ different regions</b> to find underperforming campaigns, reduce excess ad spend, and identify optimization strategies, driving improvements in conversion rates and campaign success across diverse audience segments</li>
                            <li className='mb-2'>Developed forecasting models and interactive Power BI dashboards for evaluating cross-regional campaign efficiency, resulting in a <b>33% boost in user engagement</b> and <b>$57K+ in quarterly savings</b> through predictive analytics and targeted ad budget reallocation</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Marketing Data Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Forecasting Models</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ad-Optimization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Revenue Efficiency</span>
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
