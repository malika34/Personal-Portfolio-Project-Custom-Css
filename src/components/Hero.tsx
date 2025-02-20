import Link from "next/link"; // Importing Link for navigation
import styles from "./Hero.module.css"; // Importing CSS module for styling

const Hero = () => {
  return (
    <section className={`${styles.section} ${styles.home} ${styles.active}`}>
      {/* Main section container with applied styles */}
      <div className={styles.homeDetail}>
        {/* Personal details and titles */}
        <h1>Malik Musadiq Ahmed</h1>
        <h2>
          {/* Dynamic job titles with styling and animation */}I am a{" "}
          <span
            style={{ "--i": 3 } as React.CSSProperties}
            data-text="Frontend Engineer"
          >
            Frontend Engineer
          </span>
          <span
            style={{ "--i": 2 } as React.CSSProperties}
            data-text="Next.js Developer"
          >
            Next.js Developer
          </span>
          <span
            style={{ "--i": 1 } as React.CSSProperties}
            data-text="UI/UX Developer"
          >
            UI/UX Developer
          </span>
        </h2>
        <p>
          {/* Brief description about the individual */}A brief description of
          who I am, my career path, and my professional activities
        </p>

        <div className={styles.btnSci}>
          {/* Button to download CV */}
          <Link href="/Malik-Resume.pdf" className={styles.btn} target="_blank">
            Download CV
          </Link>
          <div className={styles.sci}>
            {/* Social media links */}
            <Link href="https://github.com/malika34" target="_blank">
              <i className="bx bxl-github"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/malik-musadiq-ahmed-93b3bb2b4/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </Link>
            <Link
              href="https://www.facebook.com/musadiq.ahmed.7583"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              href="https://discord.com/invite/malikmusadiqahmed_123"
              target="_blank"
            >
              <i className="bx bxl-discord-alt"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Image container */}
      <div className={styles.homeImg}>
        <div className={styles.imgBox}>
          {/* Profile image */}
          <div className={styles.imgItem}>
            <img src="/home.png" alt="Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
