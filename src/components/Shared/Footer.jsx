import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer2">
      <footer className="footer">
        <aside>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="car dotor pro logo"
              width={1000}
              height={1000}
              className="logo"
            />
          </Link>
          <p className="w-full md:w-[400px]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/services" className="link link-hover">Services</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <Link href="/about" className="link link-hover">About</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
