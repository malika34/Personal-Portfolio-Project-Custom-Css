import styles from "@/components/Services.module.css"; // Importing CSS module for styling
import Link from "next/link"; // Importing Link for navigation

const Services = () => {
  return (
    <section
      className={`${styles.section} ${styles.services} ${styles.active}`}
    >
      {/* Section heading */}
      <h2 className={styles.heading}>
        My <span>Services</span>
      </h2>

      {/* Container for all service boxes */}
      <div className={styles.servicesContainer}>
        {/* Individual service box for Web Development */}
        <div className={styles.servicesBox}>
          <div className={styles.icon}>
            <i className="bx bx-code-alt"></i> {/* Icon for Web Development */}
            <Link href={"/contact"}>
              <i className="bx bx-arrow-back"></i> {/* Back arrow icon */}
            </Link>
          </div>
          <h3>Web Development</h3>
          <p>
            Building websites that are specifically suited to your business
            requirements.
          </p>
        </div>

        {/* Individual service box for Responsive Web Design */}
        <div className={styles.servicesBox}>
          <div className={styles.icon}>
            <i className="bx bx-devices"></i> {/* Icon for Responsive Design */}
            <Link href={"/contact"}>
              <i className="bx bx-arrow-back"></i> {/* Back arrow icon */}
            </Link>
          </div>
          <h3>Responsive Web Design</h3>
          <p>
            Designing websites that look great on all devices, from mobile to
            desktop.
          </p>
        </div>

        {/* Individual service box for E-commerce Solutions */}
        <div className={styles.servicesBox}>
          <div className={styles.icon}>
            <i className="bx bxs-store"></i> {/* Icon for E-commerce */}
            <Link href={"/contact"}>
              <i className="bx bx-arrow-back"></i> {/* Back arrow icon */}
            </Link>
          </div>
          <h3>E-commerce Solutions</h3>
          <p>Building secure and scalable online stores to boost your sales.</p>
        </div>

        {/* Individual service box for UI/UX Design */}
        <div className={styles.servicesBox}>
          <div className={styles.icon}>
            <i className="bx bxs-paint"></i> {/* Icon for UI/UX Design */}
            <Link href={"/contact"}>
              <i className="bx bx-arrow-back"></i> {/* Back arrow icon */}
            </Link>
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Designing user interfaces for your consumers that are both simple
            and attractive.
          </p>
        </div>

        {/* Individual service box for SEO Optimization */}
        <div className={styles.servicesBox}>
          <div className={styles.icon}>
            <i className="bx bx-trending-up"></i> {/* Icon for SEO */}
            <Link href={"/contact"}>
              <i className="bx bx-arrow-back"></i> {/* Back arrow icon */}
            </Link>
          </div>
          <h3>SEO Optimization</h3>
          <p>
            Increasing the visibility and search engine rating of your website.
          </p>
        </div>

        {/* Individual service box for API Integration */}
        <div className={styles.servicesBox}>
          <div className={styles.icon}>
            <i className="bx bx-transfer"></i> {/* Icon for API Integration */}
            <Link href={"/contact"}>
              <i className="bx bx-arrow-back"></i> {/* Back arrow icon */}
            </Link>
          </div>
          <h3>API Integration</h3>
          <p>
            Integrating third-party services with your website to improve its
            functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
