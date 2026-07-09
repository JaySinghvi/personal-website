import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <motion.div className="flex items-center">
            <motion.button 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }} 
              transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
              className=" border-pink-400 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              <motion.a href = "https://drive.google.com/file/d/1dwt0gtiZh9AQvEZhIg4HQmCW2Cm1sxDb/view?usp=sharing" className="text-4xl">A Look at My Resume</motion.a>
            </motion.button>
        </motion.div>
        <div className="m-8 flex items-center justify-center gap-4 text-4xl">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}><a href="https://www.linkedin.com/in/jaysinghvi/"><FaLinkedin /></a></motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}><a href="https://github.com/JaySinghvi"><FaGithub /></a></motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}><a href="https://scholar.google.com/citations?hl=en&user=dvyOCCIAAAAJ"><SiGooglescholar /></a></motion.button>

        </div>

    </nav>
  ) 
}

export default Navbar
