import React from 'react';
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';
import med from "../pg-imgs/health/med-data.png"
import can from "../pg-imgs/health/cancer.png"

const Healthcare = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Healthcare</motion.h2>
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
                <a href="https://github.com/JaySinghvi/Clustering-Medical-Data-with-K-means-and-GMM"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Clustering Medical Data with K-means and GMM</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Performed clustering on a medical dataset, utilizing both K-means and Gaussian Mixture Models (GMM) via the Mclust library to determine optimal cluster structures.</li>
                <li className='mb-2'>Utilized the NbClust function to identify the optimal number of clusters for K-means, resulting in three clusters as the most suitable configuration based on majority rule.</li>
                <li className='mb-2'>Conducted extensive analysis of cluster assignments, evaluating the purity of clusters, and their correlation with medical conditions ("Normal", "Prediabetic", "Diabetic"), achieving high purity rates in both clustering methods.</li>
                <li className='mb-2'>Employed Chi-square and Fisher’s exact tests to validate the significant relationship between cluster memberships and the test variable, ensuring robust statistical support for the clustering results.</li>
                <li className='mb-2'>Generated comprehensive visualizations including BIC plots for model comparison, and contour plots for dimension reduction, concluding that model-based clustering (GMM) offered superior purity compared to K-means.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Clustering (K-means and GMM)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Testing</span>
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
                <a href="https://github.com/JaySinghvi/KNN-Classification-for-Breast-Cancer-Diagnosis"><h6 className='mb-2 fon-semibold text-3xl pb-3'>KNN Classification for Breast Cancer Diagnosis</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a robust KNN model to classify breast cancer diagnoses using the Wisconsin Diagnostic Breast Cancer (WDBC) dataset, optimizing the model through repeated cross-validation.</li>
                <li className='mb-2'>Executed thorough data preprocessing including normalization and addressing class imbalance, ensuring balanced and accurate predictions.</li>
                <li className='mb-2'>Conducted extensive hyperparameter tuning to determine the optimal number of neighbors (k=7), achieving a model accuracy of 96.4%.</li>
                <li className='mb-2'>Evaluated the model using a confusion matrix, demonstrating a high accuracy rate of 97.18% and a Kappa statistic of 0.939, indicating strong agreement between predictions and actual outcomes.</li>
                <li className='mb-2'>Analyzed model performance with detailed metrics, highlighting a low misclassification rate of 2.82%, a false positive rate of 2.1%, and a false negative rate of 0.7%, prioritizing the minimization of false negatives due to their critical impact on patient diagnosis.</li>
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