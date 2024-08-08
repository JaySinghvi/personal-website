import React from 'react'
import aboutimg from "../assets/about.png"
import { ABOUT_TEXT} from '../constants'
import { motion } from 'framer-motion'
import { Timeline, Grid, Row, Col } from 'rsuite';
import ReactDOM from 'react-dom'


const AlignTimeline = ({ align }) => (
  <Timeline align={align} style={{width: '1400px', position: 'relative'}}>
    <Timeline.Item>
        <div className='border rounded-2xl border-purple-900 w-full pl-4 pb-3'>
            <p className='pt-4'>Feb 2024 - Present</p>
            <p>Transferred to University of Massachusetts Amherst to pursue a degree in Data Science.</p>
        </div>
    </Timeline.Item>
    <Timeline.Item>
        <div className='border pr-4 rounded-2xl border-purple-900 pb-3 w-full'>
            <p>Oct 2021 - Jun 2023</p>
            <p>Admitted to a 2-year transfer program in Computer Science with a concentration in Data Science at Manipal Academy of Higher Education, graduating with a CGPA of 3.5.</p>
        </div>
    </Timeline.Item>
    <Timeline.Item>
        <div className='border p-4 rounded-2xl border-purple-900'>
            <p>Aug 2019 - Jul 2021</p>
            <p>Enrolled in the International Baccalaureate Diploma Program and achieved a score of 35 out of 45 points.</p>
        </div>
    </Timeline.Item>
  </Timeline>
);

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 shadow-purple-900'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Educational Highlights</motion.h2>
        <div className='justify-center shadow-purple-900'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 0.5}} className='w-full lg:w-1/2 shadow-purple-900'>
                    <Grid fluid>
                        <Row>
                            <Col xs={24} sm={18} md={13} lg={21} className='text-2xl'>
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