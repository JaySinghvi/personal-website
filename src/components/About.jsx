import React from 'react'
import aboutimg from "../assets/about.png"
import { motion } from 'framer-motion'
import { Timeline, Grid, Row, Col } from 'rsuite';
import ReactDOM from 'react-dom'


const AlignTimeline = ({ align }) => (
  <Timeline align={align} style={{width: '1400px', position: 'relative'}}>
    <Timeline.Item>
        <div className='border rounded-2xl border-purple-900 w-full pl-4 pb-3'>
            <p className='pt-4'>Present</p>
            <p>B.S Data Science at University of Massachusetts Amherst</p>
        </div>
    </Timeline.Item>
    <Timeline.Item>
        <div className='border pr-4 rounded-2xl border-purple-900 pb-3 w-full'>
            <p>Aug 2019 - Jul 2021</p>
            <p>Pursued International Baccalaureate Diploma Program</p>
        </div>
    </Timeline.Item>
    <Timeline.Item>
        <div className='border p-4 rounded-2xl border-purple-900'>
            <p>Till 2018</p>
            <p>Studied the International General Certificate of Secondary Education (IGCSE) curriculum from Grade 1 to Grade 10.</p>
        </div>
    </Timeline.Item>
  </Timeline>
);

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 shadow-purple-900'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Educational Highlights</motion.h2>
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
