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
                <a href="https://github.com/JaySinghvi/Content-Based-Movie-Recommender-System"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>AI-Driven Movie Recommendation System</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Created a personalized movie recommender using <b>machine learning</b> and <b>NLP</b> to analyze and preprocess film metadata</li>
                <li className='mb-2'><b>Vectorized</b> movie details with <b>Python</b>, <b>scikit-learn</b>, and <b>NLTK</b>, then applied <b>TF-IDF</b> and <b>cosine similarity</b> for ranking</li>
                <li className='mb-2'>Developed an interactive <b>Streamlit</b> app, integrating the <b>TMDB API</b> to fetch real-time movie posters, and delivering a scalable approach to content-based <b>recommendation systems</b></li>
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
                <a href="https://github.com/JaySinghvi/Music-Recommender-Based-on-User-Setiments"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>AI-Powered Sentiment-Based Music Recommender</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a <b>facial</b> and <b>hand recognition</b> pipeline with <b>TensorFlow & Keras</b>, classifying user emotions for <b>sentiment-based</b> music suggestions from YouTube</li>
                <li className='mb-2'>Engineered <b>computer vision</b> and <b>sentiment analysis</b> methods, experimenting with hand sign recognition to refine mood detection and enhance recommendation accuracy</li>
                <li className='mb-2'>Designed an interactive <b>Streamlit UI</b>, enabling language/artist preferences and delivering real-time, emotion-driven song recommendations</li>
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