import React from 'react';
import movie from "../pg-imgs/entertainment/movie.png"
import music from "../pg-imgs/entertainment/music.png"
import { motion } from 'framer-motion';

const Entertainment = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={movie} alt="movieimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72'/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Content-Based-Movie-Recommender-System"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Intelligent Movie Recommendation System</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Designed a personalized movie recommendation engine that analyzes film metadata using natural language processing techniques, computes semantic similarity through vectorization, and uses cosine distance to rank content by contextual relevance with user inputs</li>
                <li className='mb-2'>Built and deployed a user-friendly Streamlit interface that dynamically fetches real-time movie posters through external TMDB API integration, creating an engaging, scalable recommendation experience based on user preferences and content similarity</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Artificial Intelligence</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Natural Language Processing</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>PyCharm</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>API Integration</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Recommendation Systems</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className='flex justify-center pt-10'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={music} alt="musicimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Music-Recommender-Based-on-User-Setiments"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Personalized Music by Emotion</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Designed a deep learning-based emotion recognition pipeline to classify user mood in real-time through facial expressions and hand gestures, enabling intelligent music recommendations aligned with affective behavioral signals and emotional state analysis</li>
                <li className='mb-2'>Converted the backend into a fully interactive Streamlit application, integrating third-party APIs to serve dynamic song suggestions and allowing users to personalize their experience through real-time selection of preferred artists, genres, and language settings</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Facial and Hand Recognition</span>  
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Sentiment Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Computer Vision</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Tensorflow and Keras</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>PyCharm and Streamlit</span>
              </div>            
            </motion.div>
          </div>
        </div>
    </div>
  );
};

export default Entertainment;
