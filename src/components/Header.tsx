"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname(); // Get the current path
  const [isAnimating, setIsAnimating] = useState(false); // State to manage header animation
  const [menuOpen, setMenuOpen] = useState(false); // Initialize menuOpen without `window` reference

  // Set initial menu state based on window size after the component mounts
  useEffect(() => {
    setMenuOpen(window.innerWidth > 768);
  }, []);

  // Trigger animation when pathname changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Reset menu state on page navigation
  useEffect(() => {
    setMenuOpen(window.innerWidth > 768);
  }, [pathname]);

  // Determine active link for styling
  const isActive = (href: string) => {
    return pathname === href ? styles.active : "";
  };

  // Toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Adjust menu visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`${styles.header} ${isAnimating ? styles.animateHeader : ""}`}
    >
      {/* Logo linking to the home page */}
      <Link className={styles.logo} href="/">
        Malik.
      </Link>

      {/* Menu icon for toggling mobile navigation */}
      <i
        className={`${styles.menuIcon} ${menuOpen ? "bx bx-x" : "bx bx-menu"}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      {/* Navigation links */}
      <nav
        className={`${styles.nav} ${
          menuOpen ? styles.showNav : styles.hideNav
        }`}
        style={{
          display: menuOpen ? "block" : "none",
        }}
      >
        <Link href="/" className={isActive("/")}>
          Home
        </Link>
        <Link href="/services" className={isActive("/services")}>
          Services
        </Link>
        <Link href="/resume" className={isActive("/resume")}>
          Resume
        </Link>
        <Link href="/portfolio" className={isActive("/portfolio")}>
          Portfolio
        </Link>
        <Link href="/contact" className={isActive("/contact")}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
