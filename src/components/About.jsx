import React from 'react'
import aboutimg from "../assets/about.png"
import { motion } from 'framer-motion'
import { Timeline, Grid, Row, Col } from 'rsuite';
import ReactDOM from 'react-dom'


const AlignTimeline = ({ align }) => (
  <Timeline align={align} style={{width: '1400px', position: 'relative'}}>
    <Timeline.Item>
        <div className='border rounded-2xl border-purple-900 w-full pl-4 pb-3'>
            <p className='pt-4'>🎓 Graduated in May 2026</p>
          <ul>
            <li><b>B.S in Data Science</b></li>
            <li><i>University of Massachusetts Amherst</i></li>
            <li>Focused on machine learning, data science, and applied AI with a CGPA of 3.8/4.00</li>
          </ul>
            
        </div>
    </Timeline.Item>
    <Timeline.Item>
        <div className='border pr-4 rounded-2xl border-purple-900 pb-3 w-full'>
            <p>🏫 Aug 2019 – Jul 2022</p>
          <ul>
            <li><b>International Baccalaureate Diploma Programme (IBDP)</b></li>
            <li>Completed the IB Diploma with a focus on Science and Mathematics</li>
          </ul>
        </div>
    </Timeline.Item>
    <Timeline.Item>
        <div className='border p-4 rounded-2xl border-purple-900'>
            <p>📘 Till 2018</p>
          <ul>
            <li><b>International General Certificate of Secondary Education (IGCSE)</b></li>
            <li>Studied the Cambridge curriculum from Grade 1 to 10, developing a strong foundation in logic, analytical thinking, and communication</li>
          </ul>
        </div>
    </Timeline.Item>
  </Timeline>
);

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 shadow-purple-900'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Academic Milestones 🏆</motion.h2>
        <div className=' shadow-purple-900 sm:w-4/5 lg:w-1/2'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 0.5}} className='w-full lg:w-1/2 shadow-purple-900 '>
                    <Grid fluid>
                        <Row>
                            <Col xs={24} sm={18} md={13} lg={21} className='text-2xl '>
                                <AlignTimeline align="alternate" />
                            </Col>
                        </Row>
                    </Grid>
            </motion.div>
        </div>
    </div>
  )
}

export default About
