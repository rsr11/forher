import './App.css'
import SmoothScroll from './components/SmoothScroll';
import TeddyShower from './components/TeddyShower';
import CategorySection from './components/CategorySection';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import Blank from './components/Blank';
import AboutHer from './components/AboutHer';
import HerSongard from './components/HerSongard';
import LyricalVedio from './components/LyricalVedio';
import Letter from './components/Letter';

function App() {


// const items = Array.from({ length: 50 });

gsap.registerPlugin(ScrollTrigger);
 const container = useRef();

  // useGSAP(() => {


  //   gsap.from(".hero-title", {
  //     y: -200,
  //     opacity: 0,
  //     duration:3,
  //     ease: "power4.out"
  //   })

  //   const ctx = gsap.context(() => {
  //     // 🎬 Scroll Timeline
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top top",
  //         end: "+=1000",
  //         scrub: true,
  //         pin: true,
  //       },
  //     });

  //     tl.to(".hero-title", {
  //       scale: 10,
  //       x:1200,
  //       // y:-200,
  //       duration: 1,
  //     });

  //     tl.to(".hero-bg", {
  //       height:0,
  //       // backgroundColor: "#f5f5f5",
  //       duration: 1,
  //     }, "<");

  //     tl.to(".teddy", {
  //       opacity: 0,
  //       duration: 1,
  //     }, "<"); });
      
  //   return () => ctx.revert();
  // }, []);

  return (
    <section ref={container}>
    <SmoothScroll/>
    <TeddyShower/>
    {/* <Blank/> */}
    <CategorySection/>
    <AboutHer/>
    <Blank/>
    <HerSongard/>
    <LyricalVedio/>
    <Letter/>
    </section>
  )
}

export default App
