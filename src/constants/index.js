import project1 from "../assets/projects/finance.png";
import project2 from "../assets/projects/tech.png";
import project3 from "../assets/projects/news.png";
import project4 from "../assets/projects/entertainment.png";

export const HERO_CONTENT = `Hi, I’m Jay 👋`
`🔭 I build intelligent systems that merge data, design, and business — from disaster response platforms to emotion-aware music recommenders`
`🌱 Currently exploring deep & reinforcement learning, cloud deployment, and real-time data products`
`👨‍💻 Experienced in Python, R, SQL, TensorFlow, Scikit-learn, OpenCV, Streamlit, Power BI, and full-stack development`
`🚀 Passionate about solving real-world problems through NLP, recommender systems, predictive modeling, and automation`
`🎓 Studying Informatics & Data Science at UMass Amherst (GPA: 3.95), with a research background in secure medical AI`
`💡 Always looking to collaborate on projects where innovation, impact, and scalability meet`
`📫 Let’s connect — whether it’s for a project, a research idea, or just to geek out on AI!`;


export const EXPERIENCES = [
  {
    year: "July 2024",
    role: "Quantitative Research Intern",
    company: "JPMorgan Chase & Co.",
    description: `I completed a simulation to enhance quantitative research methods, focusing on real-world financial scenarios. I analyzed loan data to estimate default probabilities, improved model accuracy by transforming FICO scores, and compared logistic regression and random forest models to classify default risks. This experience provided practical skills in financial modeling, statistical analysis, and data-driven decision-making.`,
    technologies: ["Python", "Excel", "Machine Learning Models", "Financial Modeling"],
  },
  {
    year: "May 2024 - June 2024",
    role: "Future Shaper",
    company: "Moonshot Pirates",
    description: `I led the development of TerraLink, a web application for the Shape the Future Challenge, using Django to implement features like disaster reporting and real-time updates. I conducted surveys to gather data from diverse sources and created a YouTube Shorts video to explain our project. Collaborating with a global team, I demonstrated strong problem-solving and communication skills in presenting our outcomes.`,
    technologies: ["Django", "Google Forms", "Python"]
  },
  {
    year: "July 2023 - August 2023",
    role: "Data Analyst",
    company: "Excelerate",
    description: `I collaborated with seven data analysts to optimize Facebook ads, achieving a 50% reduction in ad spend. Using Python, I analyzed data and created visualizations to enhance campaign efficiency. Awarded a $1,000 scholarship and a star performer badge by Saint Louis University, I presented our final recommendations to the HR department, demonstrating effective communication and presentation skills.`,
    technologies: ["Python", "Tableau", "Power BI","Excel", "Canvas"],
  }
];

export const PROJECTS = [
  {
    title: "Analyzing Credit Risk Using Regression Models",
    image: project1,
    description: [
        "Collaborated with a peer to analyze the Kaggle Credit Risk Dataset using R, evaluating key predictors of loan defaults.",
        "Developed logistic regression and random forest models to forecast loan applicants likelihood of default and identify significant predictors.",
        "Conducted a comprehensive analysis of debtors financial data and loan statuses to determine critical factors for creditor decision-making.",
        "Identified home ownership, reason for taking the loan, loan amount, interest rate, loan percent income, and credit history length as the most significant predictors of loan defaults.",
        "Discovered that having a prior default in ones credit history is a very weak predictor, with a p-value exceeding 0.8."
      ],
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  email: "jay.singhvi04@gmail.com",
};
