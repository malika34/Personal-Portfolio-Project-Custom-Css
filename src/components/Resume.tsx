"use client";

import { useState } from "react";
import styles from "@/components/Resume.module.css";
import Image from "next/image";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <section className={`${styles.section} ${styles.resume} ${styles.active}`}>
      <div className={styles.resumeContainer}>
        <div className={styles.resumeBox}>
          <h2>Why hire me?</h2>
          <p className={styles.desc}>
            Hire me because I am committed to providing you with user-focused,
            high-quality web solutions.
          </p>
          <button
            className={`${styles.resumeBtn} ${
              activeSection === "experience" ? styles.active : ""
            }`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </button>
          <button
            className={`${styles.resumeBtn} ${
              activeSection === "education" ? styles.active : ""
            }`}
            onClick={() => setActiveSection("education")}
          >
            Education
          </button>
          <button
            className={`${styles.resumeBtn} ${
              activeSection === "skills" ? styles.active : ""
            }`}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </button>
          <button
            className={`${styles.resumeBtn} ${
              activeSection === "about" ? styles.active : ""
            }`}
            onClick={() => setActiveSection("about")}
          >
            About Me
          </button>
        </div>
        <div className={styles.resumeBox}>
          {/* Experience */}
          {activeSection === "experience" && (
            <div className={`${styles.resumeDetail} ${styles.experience}`}>
              <h2 className={styles.heading}>
                My <span>Experience</span>
              </h2>
              <p className={styles.desc}>
                My Experience Applying Knowledge to Have an Impact in the Real
                World
              </p>
              <div className={styles.resumeList}>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>2024 - Present</p>
                  <h3>Frontend Developer</h3>
                  <p className={styles.company}>ABC Corp.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum maxime magnam nobis eum, maiores quam.
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>2022 - 2023</p>
                  <h3>Backend Developer</h3>
                  <p className={styles.company}>BBC Solutions.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum maxime magnam nobis eum, maiores quam.
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>2021 -2022</p>
                  <h3>Full-Stack Developer</h3>
                  <p className={styles.company}>BBC Solutions.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum maxime magnam nobis eum, maiores quam.
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>2020 - 2021</p>
                  <h3>Mern-Stack-Developer</h3>
                  <p className={styles.company}>BMC Corp.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum maxime magnam nobis eum, maiores quam.
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* Education */}
          {activeSection === "education" && (
            <div className={`${styles.resumeDetail} ${styles.education}`}>
              <h2 className={styles.heading}>
                My <span>Education</span>
              </h2>
              <p className={styles.desc}>
                My Educational Journey developing Future-Ready Knowledge and
                Skills.
              </p>
              <div className={styles.resumeList}>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>(2024 - 2025) - Second Quarter</p>
                  <h3>Certified Cloud Appled Gen Ai Engineer</h3>
                  <p className={styles.company}>Governor House</p>
                  <p>
                    currently enrolled in Certified Cloud Appled Gen Ai
                    Engineer.
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>(2024 - 2028) - First Semester</p>
                  <h3>Bachelors Software Engineering</h3>
                  <p className={styles.company}>Virtual-University-Pakistan</p>
                  <p>
                    currently engaged on a software engineering bachelors
                    degree.
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>(2021 - 2023) - Completed</p>
                  <h3>Intermediate Commerce</h3>
                  <p className={styles.company}>Govt-College-Commerce</p>
                  <p>Completed Intermediate part I-II in Commerce.</p>
                </div>
                <div className={styles.resumeItem}>
                  <p className={styles.year}>(2019 - 2020) - Completed </p>
                  <h3>Matric Computer Science</h3>
                  <p className={styles.company}>Bahria-Model-School</p>
                  <p>Completed Matriculation in Computer Science.</p>
                </div>
              </div>
            </div>
          )}
          {/* Skills */}
          {activeSection === "skills" && (
            <div className={`${styles.resumeDetail} ${styles.skills}`}>
              <h2 className={styles.heading}>
                My <span>Skills</span>
              </h2>
              <p className={styles.desc}>
                My Skillset Using latest Technology to Deliver Innovative
                Solutions.
              </p>
              <div className={styles.resumeList}>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-css3"></i>
                  <span>CSS3</span>
                </div>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-javascript"></i>
                  <span>Javascript</span>
                </div>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-typescript"></i>
                  <span>Typescript</span>
                </div>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-tailwind-css"></i>
                  <span>TailwindCss</span>
                </div>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-react"></i>
                  <span>React.Js</span>
                </div>
                <div className={styles.resumeItem}>
                  <Image
                    src={"/nextjs.svg"}
                    width={70}
                    height={70}
                    alt="nextjs svg"
                  />
                  <span>Next.Js</span>
                </div>
                <div className={styles.resumeItem}>
                  <i className="bx bxl-figma"></i>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          )}
          {/* About */}
          {activeSection === "about" && (
            <div className={`${styles.resumeDetail} ${styles.about}`}>
              <h2 className={styles.heading}>
                About <span>Me</span>
              </h2>
              <p className={styles.desc}>
                About Me A Creative Problem-Solver, Tech Enthusiast, and Curious
                Learner Exploring Into the World of Technology and Further.
              </p>
              <div className={styles.resumeList}>
                <div className={styles.resumeItem}>
                  <p>
                    Name
                    <span>Malik Musadiq Ahmed</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Gender
                    <span>Male</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Age
                    <span>20 Years Old</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Status
                    <span>Unmarried</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    City
                    <span>Karachi</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Nationality
                    <span>Pakistan</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Experience
                    <span>1+ Year</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Full Time
                    <span>Available</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Freelance
                    <span>Available</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Phone
                    <span>(+92) 334 0125 672</span>
                  </p>
                </div>
                <div className={styles.resumeItem}>
                  <p>
                    Languages
                    <span>English, Urdu</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
