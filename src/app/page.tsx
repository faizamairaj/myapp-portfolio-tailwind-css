"use client"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function Home() {

  useEffect(()=>{
    AOS.init ({
   easing: "ease-out-back",
   duration: 1200,
   delay: 100,
   mirror: true,
   anchorPlacement: "bottom-bottom",
   offset: 160,
    });
    AOS.refresh();
  },[]);

  return (
   <main>
    <Navbar/>
    <Hero/>
 <Cards/>
    <Skills/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </main>
  );
}
