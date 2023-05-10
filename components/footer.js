import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Assuming you're using CSS modules

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_content}>
      <div className={styles.footer_section}>
        <h2>Company Name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className={styles.footer_section}>
        <h2>Links</h2>
        <ul className={styles.footer_links}>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
        </ul>
      </div>
      <div className={styles.footer_section}>
        <h2>Contact Info</h2>
        <p>123 Fake Street, City, State, Country</p>
        <p>Email: info@company.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
    <div className={styles.footer_copy}>
      <p>© 2023 Company Name. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;