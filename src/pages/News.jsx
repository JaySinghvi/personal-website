import React from 'react';
import { motion } from 'framer-motion';
import fake from "../pg-imgs/media/fake.png"
import sen from "../pg-imgs/media/senti.png"

const News = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
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
                <a href="https://github.com/JaySinghvi/Fake-News-Detection-Using-Logistic-Regression-and-NLP-Techniques"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Fake News Detection Using Logistic Regression and NLP</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a predictive model using <b>logistic regression</b> to classify news articles as real or fake, ensuring robust <b>binary classification</b>.</li>
                <li className='mb-2'>Transformed textual data into numerical feature vectors with <b>TF-IDF vectorization</b>, enhancing the model’s ability to analyze and differentiate between news content.</li>
                <li className='mb-2'>Performed comprehensive data preprocessing, including handling missing values, merging relevant columns, and applying <b>stemming</b> and <b>stopword removal</b> to refine input quality.</li>
                <li className='mb-2'>Leveraged <b>Natural Language Processing (NLP)</b> techniques to analyze text data, improving the model’s accuracy in identifying deceptive news articles.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Natural Language Processing</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Vectorization</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Logistic Regression</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Text Classification</span>
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
                <a href="https://github.com/JaySinghvi/Stock-Sentiment-Analysis-Using-News-Data-Market-Trends"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Stock Sentiment Analysis Using News Data & Market Trends</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Performed <b>sentiment analysis</b> on stocks of major companies like Nvidia, Spotify, Meta, Microsoft, Amazon, Tesla, Citigroup Inc, and Apple to assess market sentiment and its impact on stock trends.</li>
                <li className='mb-2'>Extracted stock data using the <b>yfinance</b> library and its <b>Ticker</b> function, enabling real-time access to historical and financial stock information.</li>
                <li className='mb-2'>Scraped news articles from <b>Finviz</b> using <b>Beautiful Soup</b>, ensuring a comprehensive dataset for sentiment evaluation.</li>
                <li className='mb-2'>Computed sentiment scores using <b>SentimentIntensityAnalyzer</b> (nltk), uncovering a strong correlation between positive sentiment trends and exponential stock growth.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Sentiment Analysis & NLP</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Web Scraping</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Stock Market Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Trend Analysis</span>
              </div>            
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default News;