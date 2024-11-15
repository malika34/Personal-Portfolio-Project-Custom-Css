import styles from "./Contact.module.css"; // Importing CSS module for styling

const Contact = () => {
  return (
    <section className={`${styles.section} ${styles.contact} ${styles.active}`}>
      {/* Container for all contact information */}
      <div className={styles.contactContainer}>
        {/* Box for contact details */}
        <div className={styles.contactBox}>
          <h2>Lets Work Together</h2>
          <p className={styles.desc}>
            Please get in touch with me if you would want to discuss creative
            ideas, collaborate, or have project-related concerns.
          </p>

          {/* Contact detail: Phone */}
          <div className={styles.contactDetail}>
            <i className="bx bxs-phone"></i>
            <div className={styles.detail}>
              <p>Phone</p>
              <p>(+92) 334 0125 672</p>
            </div>
          </div>

          {/* Contact detail: Email */}
          <div className={styles.contactDetail}>
            <i className="bx bx-envelope"></i>
            <div className={styles.detail}>
              <p>Email</p>
              <p>musadiqa34@gmail.com</p>
            </div>
          </div>

          {/* Contact detail: Address */}
          <div className={styles.contactDetail}>
            <i className="bx bx-map"></i>
            <div className={styles.detail}>
              <p>Address</p>
              <p>Clifton Punjab Colony, Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Box for contact form */}
        <div className={styles.contactBox}>
          <form action="">
            {/* Heading for the contact form */}
            <h2 className={styles.heading}>
              Contact <span>Me!</span>
            </h2>

            {/* Input fields for the contact form */}
            <div className={styles.fieldBox}>
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Email Subject" required />
              <textarea placeholder="Your Message" required></textarea>
            </div>

            {/* Submit button */}
            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
