import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
// import eyesOne from "../assets/herEyes1.jpeg";
// import eyesTwo from "../assets/herEyes2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const CategorySection = () => {
 
    const headingRef = React.useRef();
    const vedioRef = React.useRef();
    const containerRef = React.useRef();
    const textRef = React.useRef();
    const [muted, setMuted] = React.useState(false);


 useGSAP(() => {
  const ctx = gsap.context(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 95%",
        scrub:true,
      },
      y:100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(vedioRef.current, {
        scrollTrigger:{
            trigger: vedioRef.current,
            start: "top 90%",
            end:"top 40%",
            scrub:true,
            markers:true,
        },
        scale:"0",
        filter:"blur(20px)",
        duration:1,
        ease:"power4.out",
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.from(".texts", {
  y: 100,
  opacity: 0,
  stagger: 1
});

  });

  return () => ctx.revert();
}, []);



const playVedio=()=>{
    vedioRef.current.play();
    console.log(muted);
    vedioRef.current.muted=muted;
    
    setMuted(prev=>!prev);
}

const stopVedio=()=>{
  console.log(vedioRef.current.onPause);
  
  if(vedioRef.current.onPause){
    vedioRef.current.play();
    return;
  }
  vedioRef.current.pause();
  vedioRef.current.muted=true;
    // vedioRef.current.currentTime=0;
    setMuted(true);
};


  return (
    <section ref={containerRef} className='category-section story-section w-screen justify-between min-h-screen flex bg-greeny text-white p-20' >
        <section className='' >
       <h2 id='kesiHo' ref={headingRef} className='text-7xl flex items-center gap-5 font-bold'>Toh KESI HAI AAP ?? 
        <button onClick={playVedio} className='size-16 text-3xl active:bg-white flex justify-center hover:bg-pinky scroll-smooth cursor-pointer bg-red-500 p-4 rounded-full' > ▶ </button>
        <p className='text-3xl animate-pulse' >(Click it)</p>
     </h2>
     <video ref={vedioRef} muted loop className='mt-10 w-[60%] border8 border-8 border-amber-500 rounded-lg'>
         <source src={"https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771829689/vedio3_a72608.mp4"} type="video/mp4" />
     </video>
       {/* <div className='flex gap-5' >
       <img src={eyesOne} alt="" className='w-40 border-4 border-black' />
       <img src={eyesTwo} alt="" className='w-32 border-4 border-black' />
       </div> */}

       {/* <p className='text-3xl mt-10' >You can now mute and stop this vedio!  -
        <button className='cursor-pointer' onClick={stopVedio} >⛔</button>
         </p> */}
       </section>

 
       <section ref={textRef} className='w-[50%] pt-20 texts border-r-4 pr-5' >
        <h2 className='text-4xl text-offwhite texts text-end' >First Sorry,flick thodi thez ho gyi thi ! 🙇‍♂️</h2>

        <h2 className='text-4xl mt-10 text-offwhite texts text-end' >Socha chalo yeh banata hu!</h2>

        <h2 className='text-4xl mt-10 text-offwhite texts text-end' >This site is dedicated to you 🧸!</h2>

        <h2 className='texts' ><p className='text-4xl mt-10 text-end' >Now click this icon to stop this vedio!  -
        <button className='cursor-pointer' onClick={stopVedio} >⛔</button> then scroll
         </p></h2>
        
       </section>

       {/* <p className='text-2xl mt-10'>Here is the some cards choose any you like!</p> */}
    </section>
  )
}

export default CategorySection
