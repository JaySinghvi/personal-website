import React from 'react';
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';
import med from "../pg-imgs/health/med-data.png"
import can from "../pg-imgs/health/cancer.png"

const Healthcare = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={med} alt="medimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Advanced-Cluster-Analysis-for-Medical-Condition-Classification"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Advanced Cluster Analysis for Medical Condition Classification</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Implemented advanced clustering techniques using <b>K-Means</b> and <b>Gaussian Mixture Models (GMM)</b> via <b>Mclust</b>, uncovering hidden structures in medical data.</li>
                <li className='mb-2'>Utilized the <b>NbClust</b> function to identify the optimal number of clusters for K-means, resulting in three clusters as the most suitable configuration based on majority rule.</li>
                <li className='mb-2'>Conducted extensive analysis of cluster assignments, evaluating the purity of clusters, and their correlation with medical conditions ("Normal", "Prediabetic", "Diabetic"), achieving high purity rates in both clustering methods.</li>
                <li className='mb-2'>Employed <b>Chi-square</b> and <b>Fisher’s exact tests</b> to validate the significant relationship between cluster memberships and the test variable, ensuring robust statistical support for the clustering results.</li>
                <li className='mb-2'>Generated comprehensive visualizations including <b>BIC plots</b> for model comparison, and contour plots for dimension reduction, concluding that model-based clustering (GMM) offered superior purity compared to K-means.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>K-means and GMM</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Validation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Cluster Analysis</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className=' pt-10 flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={can} alt="canimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Optimized-KNN-Model-for-Breast-Cancer-Classification"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Optimized KNN Model for Breast Cancer Classification</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a high-performance K-Nearest Neighbors <b>(KNN)</b> model for breast cancer classification using the Wisconsin Diagnostic Breast Cancer <b>(WDBC)</b> dataset</li>
                <li className='mb-2'>Executed thorough data preprocessing, including normalization and class imbalance correction, which contributed to the model’s <b>96.4%</b> accuracy.</li>
                <li className='mb-2'>Optimized the model via hyperparameter tuning, identifying <b>k=7</b> as the optimal value, and validated performance using a <b>confusion matrix</b>, achieving <b>97.18%</b> accuracy with a <b>Kappa statistic of 0.939.</b></li>
                <li className='mb-2'>Analyzed key performance metrics, reporting a <b>2.82% misclassification rate</b>, a <b>false positive rate of 2.1%</b>, and a <b>false negative rate of 0.7%</b>, prioritizing minimization of false negatives to enhance diagnostic reliability.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>KNN Classification</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Cross-Validation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Confusion Matrix</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Hyperparameter Tuning</span>
              </div>            
            </motion.div>
          </div>
        </div>

    </div>
  );
};

export default Healthcare;