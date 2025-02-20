"use client"; // Enables client-side rendering for this component
import Link from "next/link"; // For navigation links
import styles from "@/components/Portfolio.module.css"; // Importing CSS module for styling
import { useState } from "react"; // For managing state

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0); // State for tracking the current project

  // Array of project details
  const projects = [
    {
      numb: "01",
      title: "Frontend Project",
      description:
        "Developed a fully responsive personal portfolio with a sleek UI using Next.js, Tailwind CSS, and Framer Motion.",
      tech: "Next.js, TailwindCss",
      liveLink:
        "https://malik-personal-portfolio-project-tailwind-css.vercel.app/",
      githubLink:
        "https://github.com/malika34/Personal-Portfolio-Project-Tailwind-Css.git",
      image: "/project 1.png",
    },
    {
      numb: "02",
      title: "Frontend Project",
      description:
        "Developed a full-featured e-commerce site with product listings, shopping cart, and checkout functionality using Nextjs.",
      tech: "Nextjs, TailwindCss",
      liveLink:
        "https://hackathon-ecommerce-st-git-fcf90d-malik-musadiq-ahmeds-projects.vercel.app/",
      githubLink:
        "https://github.com/malika34/Hackathon-Ecommerce-Store/tree/milestone-3",
      image: "/project 6.png",
    },
    {
      numb: "03",
      title: "Frontend Project",
      description:
        "Built a dynamic blog site for reading articles, optimized for performance with Next.js and styled with Tailwind CSS for a modern look.",
      tech: "Next.js, TailwindCss",
      liveLink: "https://malik-blog.vercel.app/",
      githubLink: "https://github.com/malika34/Blog-Website",
      image: "/project 2.png",
    },
    {
      numb: "04",
      title: "Frontend Project",
      description:
        "Build a fully responsive, interactive resume builder that allows users to create and customize professional resumes.",
      tech: "HTML5, CSS3, Typescript",
      liveLink: "https://interactive-resume-builder-malik.vercel.app/",
      githubLink: "https://github.com/malika34/Interactive-resume-builder.git",
      image: "/project 3.png",
    },
    {
      numb: "05",
      title: "Frontend Project",
      description:
        "Build a fully responsive, static Netflix clone with a modern UI and intuitive layout using only HTML and CSS.",
      tech: "HTML5, CSS3",
      liveLink: "https://netflix-pk-malik.vercel.app/",
      githubLink: "https://github.com/malika34/Netflix-Clone-Html-Css",
      image: "/project 4.png",
    },
  ];

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject((prev) => prev + 1);
    }
  };

  // Function to handle the "Previous" button click
  const handlePrev = () => {
    if (currentProject > 0) {
      setCurrentProject((prev) => prev - 1);
    }
  };

  return (
    <section
      className={`${styles.section} ${styles.portfolio} ${styles.active}`}
    >
      {/* Section heading */}
      <h2 className={styles.heading}>
        Latest <span>Project</span>
      </h2>
      {/* Portfolio container */}
      <div className={styles.portfolioContainer}>
        {/* Project details section */}
        <div className={styles.portfolioBox}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.portfolioDetail} ${
                index === currentProject ? styles.active : ""
              }`}
            >
              <p className={styles.numb}>{project.numb}</p>
              {project.title && <h3>{project.title}</h3>}
              {project.description && <p>{project.description}</p>}
              {project.tech && (
                <div className={styles.tech}>
                  <p>{project.tech}</p>
                </div>
              )}
              {/* Live and GitHub links */}
              {project.liveLink && project.githubLink && (
                <div className={styles.liveGithub}>
                  <Link href={project.liveLink} target="_blank">
                    <i className="bx bx-arrow-back"></i>
                    <span>Live Project</span>
                  </Link>
                  <Link href={project.githubLink} target="_blank">
                    <i className="bx bxl-github"></i>
                    <span>Github Repository</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Carousel section */}
        <div className={styles.portfolioBox}>
          <div className={styles.portfolioCarousel}>
            <div className={styles.imgSlide}>
              <div className={styles.imgItem}>
                <img src={projects[currentProject].image} alt="projects" />
              </div>
            </div>
            {/* Navigation buttons */}
            <div className={styles.navigation}>
              <button
                className={`${styles.arrowLeft} ${
                  currentProject === 0 ? styles.disabled : ""
                }`}
                onClick={handlePrev}
                disabled={currentProject === 0}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <button
                className={`${styles.arrowRight} ${
                  currentProject === projects.length - 1 ? styles.disabled : ""
                }`}
                onClick={handleNext}
                disabled={currentProject === projects.length - 1}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
