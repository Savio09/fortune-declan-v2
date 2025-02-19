"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/dist/lenis-react";
import Image from "next/image";
import "@/components/projects/projects.css";
export default function Projects() {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <Image src="/img1.jpg" alt="" width={100} height={100} />
          </div>
          <div className="card card-right">
            <Image src="/img2.jpg" alt="" width={100} height={100} />
          </div>
        </div>
      );
    }
    return rows;
  };
  return (
    <>
      <ReactLenis root>
        <section className="hero">
          <div className="img">
            <Image src="/img3.jpg" alt="" width={100} height={100} />
          </div>
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <h1>Fortune Declan!</h1>
            </div>
            <div className="copy">
              <div className="line">
                <p>Delve into coding without clutter</p>
              </div>
              <div className="line">
                <p>One subscription. Endless web design</p>
              </div>
              <div className="line">
                <p>Take the fast lane to mastery</p>
              </div>

              <div className="btn">
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
          {generateRows()}
        </section>
        <section className="footer">
          <Link href="#">This is it</Link>
        </section>
      </ReactLenis>
    </>
  );
}
