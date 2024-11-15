"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./BarsBackground.module.css";

const BarsBackground = () => {
  const [active, setActive] = useState(false); // State to control the active state of the bars animation
  const pathname = usePathname(); // Get the current path from Next.js router

  useEffect(() => {
    // Activate the animation when the pathname changes
    setActive(true);

    // Set a timer to deactivate the animation after 1.5 seconds
    const timer = setTimeout(() => {
      setActive(false);
    }, 1500);

    // Clear the timer when the component unmounts or when the pathname changes
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`${styles.barsBox} ${active ? styles.active : ""}`} // Add active class based on state
      style={{
        backgroundColor: active ? "transparent" : "var(--bg-color)", // Change background color dynamically
      }}
    >
      {/* Render multiple bars with different animation delays */}
      <div
        className={styles.bar}
        style={{ "--i": 6 } as React.CSSProperties}
      ></div>
      <div
        className={styles.bar}
        style={{ "--i": 5 } as React.CSSProperties}
      ></div>
      <div
        className={styles.bar}
        style={{ "--i": 4 } as React.CSSProperties}
      ></div>
      <div
        className={styles.bar}
        style={{ "--i": 3 } as React.CSSProperties}
      ></div>
      <div
        className={styles.bar}
        style={{ "--i": 2 } as React.CSSProperties}
      ></div>
      <div
        className={styles.bar}
        style={{ "--i": 1 } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default BarsBackground;
