import React from 'react';
import { motion } from 'framer-motion';
import fake from "../pg-imgs/media/fake.png"
import sen from "../pg-imgs/media/senti.png"

const News = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Media News</motion.h2>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={fake} alt="fakeimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Fake-News-Detection-Using-Logistic-Regression-and-NLP-Techniques"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Fake News Detection Using Logistic Regression and NLP Techniques</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Constructed a predictive model to classify news articles as real or fake, leveraging logistic regression for effective binary classification.</li>
                <li className='mb-2'>Transformed textual data into numerical feature vectors using the TF-IDF vectorization method, which improved the model's ability to process and analyze text effectively.</li>
                <li className='mb-2'>Cleaned and prepared the dataset by handling missing values, merging relevant columns, and applying text preprocessing techniques such as stemming and stopword removal to ensure high-quality input data.</li>
                <li className='mb-2'>Utilized Natural Language Processing (NLP) methods to preprocess and analyze text data, ensuring the model's capability to effectively distinguish between real and fake news articles.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Natural Language Processing</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Vectorization</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Logistic Regression</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Feature Engineering</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className=' pt-10 flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={sen} alt="senimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72'/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Sentiment-Analysis-of-Major-Tech-Stocks-Using-News-Data"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Sentiment Analysis of Major Tech Stocks Using News Data</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Conducted sentiment analysis on the stocks of Nvidia, Spotify, Meta, Microsoft, Amazon, Tesla, Citigroup Inc, and Apple using news data from the Finviz website.</li>
                <li className='mb-2'>Leveraged the yfinance library to fetch stock data from Yahoo Finance, utilizing the Ticker function to extract detailed stock information.</li>
                <li className='mb-2'>Employed Beautiful Soup to scrape relevant news articles from Finviz, ensuring a comprehensive dataset for analysis.</li>
                <li className='mb-2'>Applied the SentimentIntensityAnalyzer from the nltk package to compute compound sentiment scores for each stock, revealing positive sentiment trends correlating with exponential stock growth.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Sentiment Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Web Scraping (Beautiful Soup)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Stock Market Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Natural Language Toolkit (NLTK)</span>
              </div>            
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default News;