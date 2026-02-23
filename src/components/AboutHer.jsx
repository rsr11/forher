import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const AboutHer = () => {

    const vedioRef = useRef();
    // const vedio2Ref = useRef();
    const container = useRef();
    const songBoxRef = useRef();
    const ImgContainerRef = useRef();


gsap.registerPlugin(ScrollTrigger);

useGSAP(()=>{
  
  const tl = gsap.timeline({delay:1});

  tl.from("#intro-text",{
    scrollTrigger:{
      trigger:"#intro-text",
      start:"top 90%",
      end:"top 80%",
      scrub:true,  
    },
    y:"100px",
    opacity:0,
  });

  tl.from("#second-text",{
    scrollTrigger:{
      trigger:"#intro-text",
      start:"top 70%",
      end:"top 60%",
      scrub:true,   
    },
    y:"100px",
    opacity:0,
  });

   tl.from("#song-start", {
     scrollTrigger:{
      trigger:"#song-start",
      start:"top 80%",
      end:"top 40%",
      scrub:true,   
    },
  y: 100,
  opacity: 0,
},);

 tl.from("#song-second-line", {
     scrollTrigger:{
      trigger:"#song-second-line",
      start:"top 70%",
      end:"top 50%",
      scrub:true,   
    },
  y: 100,
  opacity: 0,
  delay:2,
},);

tl.from("#third-is-pic",{
     scrollTrigger:{
      trigger:"#third-is-pic",
      start:"top 80%",
      end:"top 40%",
      scrub:true,   
    },
    y:"100px",
    opacity:0,
  })




const imageTl = gsap.timeline({
   scrollTrigger: {
        trigger: ImgContainerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
});


imageTl.to(".images",{
   scrollTrigger:{
    trigger:"#vedioM",
    start:"top 30%",
    scrub:true,
   },
   delay:1,
   x:-500,
   y:200,
   ease:"power1.out",
   rotate:"0deg",
   scale:1.5,
   stagger:1
});

});  


    const StartAndPlayVedio = (selectedVedio)=>{

        const vedio = selectedVedio;
        vedio.play();
        vedio.muted=false;
    }

    
  return (
    // SO WHERE IS SHE!! 🤷‍♂️ 
    <>
    <section ref={container} className='rainbow-shower border-x-2 border-pinky overflow-hidden pt-10 pb-40 relative min-h-screen w-screen' >
   

   <section>
    <div className='flex justify-center' >
    <button 
      onClick={()=>StartAndPlayVedio(vedioRef.current)} 
      className='bg-white p-2 text-xl rounded-full hover:bg-red-500 hover:text-white active:bg-white active:text-black cursor-pointer'
      > Click Me! plz then scroll down </button>  
    </div>
    <h1 id='intro-text' className='text-7xl absolut top-5 w-full text-center mt-5 text-white'> OKey, I AM READY ! 🧑‍💼 </h1>
    <h1 id='second-text'className='text-7xl absolut top-5 mt-5 text-center text-white'>WHERE IS SHE!! 🤷‍♂️  </h1>
    
    <div ref={songBoxRef} className='text-offwhite' >
    <h1 id='song-start' className='text-center song-lyrics mt-5 text-5xl'>......</h1>
    <h1 id='song-second-line' className='text-center text-5xl song-lyrics mt-10' >THERE SHE WAS 💕💕</h1>
    </div>
    <img id='third-is-pic' src={"images/herPic2.jpeg"} alt="" className='border-4 mt-20 w-[40%] mx-auto border-black' /> 
    </section>
    
       
    <section ref={ImgContainerRef} className='flex justify-between' >
    
    <div className='absolute right-[50%] translate-x-[50%] top-20'>
    <img src="images/star.png" className='w-20 absolute -right-10 -top-7 animate-puse z-10 object-contain' alt="" />
    <img src="images/111.jpeg" className='w-80 rounded-2xl object-contain' alt="" />
    </div>

    <section className='flex  gap-5 mt-10' >
    <video id='vedioM' ref={vedioRef} className='size-100 object-contain border top-20 left-[5%] border-inky bg-black shadow-2xl pt-2 shadow-whit  rounded-4xl' muted> 
    <source src={"https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771829688/vedio4_uz5rs2.mp4"} />  
    </video> 
  

    </section>

    <section id='images' className=' justify-center relative -right-[30%]  flex items-center' >
    <img id='image1' src={"images/herPic11.jpeg"} className='images w-50 relative top-10 left-0 -rotate-20 rounded-xl' alt="" />
    <img src={"images/herPic5.jpeg"} className='images w-50 relative top-0 -left-20 rotate-0 rounded-xl' alt="" />
    <img src={"images/herPic6.jpeg"} className='images w-50 relative top-10 -left-52 rotate-10 rounded-xl' alt="" />
    <img src={"images/herPic4.jpeg"} className='images w-50 relative top-20  -left-80 rotate-20 rounded-xl' alt="" />
    </section>
    </section>

    </section>


    </>
  )
}

export default AboutHer
