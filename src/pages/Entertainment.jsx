import React from 'react';
import movie from "../pg-imgs/entertainment/movie.png"
import music from "../pg-imgs/entertainment/music.png"
import { motion } from 'framer-motion';

const Entertainment = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Entertainment</motion.h2>
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
                <a href="https://github.com/JaySinghvi/Content-Based-Movie-Recommender-System"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Content-Based Movie Recommender System</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a sophisticated content-based movie recommender system using a Kaggle dataset, involving comprehensive data preprocessing and text vectorization techniques.</li>
                <li className='mb-2'>Transformed movie tags into vector representations, computed similarity scores with cosine similarity, and applied stemming to consolidate similar words into their root forms.</li>
                <li className='mb-2'>Created an advanced recommendation function to identify and suggest similar movies based on user queries, ensuring relevance and accuracy.</li>
                <li className='mb-2'>Designed and implemented a user-friendly web application with PyCharm and Streamlit, seamlessly integrating the frontend with the Python backend.</li>
                <li className='mb-2'>Enhanced the application by incorporating movie posters from the TMDB API, providing an engaging visual experience alongside movie recommendations.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Text-Vectorization</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>PyCharm and Streamlit</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>API Integration</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Recommendation Systems</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Natural Language Processing</span>
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
                <a href="https://github.com/JaySinghvi/Music-Recommender-Based-on-User-Setiments"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Sentiment-Driven Music Recommender</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Engineered an advanced music recommendation system leveraging facial recognition to analyze user sentiments and curate personalized song recommendations from YouTube.</li>
                <li className='mb-2'>Employed computer vision libraries to capture and classify happy, sad, and angry facial expressions using the laptop's camera, and experimented with hand sign recognition for sentiment detection.</li>
                <li className='mb-2'>Developed and trained a robust model with TensorFlow and Keras to accurately interpret facial expressions for sentiment-driven music recommendations.</li>
                <li className='mb-2'>Designed an intuitive user interface with Streamlit, enabling users to specify language and artist preferences, and utilize the camera to record sentiments, resulting in tailored song suggestions based on the detected emotions.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Facial Recognition</span>  
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