// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'


const vedioList = [
  {name:"speech",
    link:"https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822825/speech_dmybss.mp4"
  },
  {
    name:"friends",
    link:"https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822816/friends_ohpitb.mp4",
  },
  {
    name:"iwilltakecare",
    link:"https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822818/iwilltakecare_ro5lj9.mp4"
  },
  {
    name:"spidy",
    link:"https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822822/spidy_eqap9e.mp4"
  }
]

const LyricalVedio = () => {

    // const lyricsRef = useRef();
    const vedioRef = useRef();
    const rightSideRef = useRef();



  const playSong=()=>{
    vedioRef.current.play();
    vedioRef.current.muted=false;
  }



  return (
    <section className='h-screen lyrics flex w-screen overflow-hidden bg-black'>
    <section className='w-[55%] relative flex gap-10 items-center justify-center h-screen'>
     <video ref={vedioRef} muted src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822825/speech_dmybss.mp4"  className='w-[60%] object-contain'></video>
     <button onClick={playSong} className='text-white cursor-pointer text-4xl' >Play ▶ </button>

     
     
     {/* <div className='absolute flex gap-5 bottom-0' >
      <video src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822816/friends_ohpitb.mp4" className='w-30'></video>
      <video src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822818/lookingfor_nciak7.mp4" autoPlay mute className='w-30'></video> */}
      {/* <video src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822818/iwilltakecare_ro5lj9.mp4" className='w-30'></video> */}
      {/* <video src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822822/spidy_eqap9e.mp4" className='w-30'></video>
     </div> */}

    </section>



    <section ref={rightSideRef} className='w-[45%] border-l-8 border-pinky relative h-screen pink-chess-bg'>
    {/* <img id='flower1' src="images/lightPinkFlower.png" className='absolute size-32 z-10 left-1 top-15' alt="" /> */}
    <img src="images/flowerBg.png" className='absolute z-10 right-0' alt="" />
    <img src="images/teddy1.png" className='object-contain w-20 -rotate-15 absolute top-[45%] left-5' alt="" />

    <div className='relative mt-[10%] ml-[10%] bg-re-500'>
      <img src="images/camera.png" className='rotate-6 rounded-xl' alt="" />
      <img src="images/herPicTp.png" className='object-contain absolute w-50 top-10 rotate-6' alt="" />
    </div>

   <div className='relative mt-[3%] ml-[18%] bg-re-500'>
      <img src="images/camera.png" className='rotate- w-82 rounded-xl' alt="" />
      <img src="images/herpic10.png" className='object-contain absolute w-44 ml-10  top-12 -rotate-2' alt="" />
    </div>

  <div className='relative mt-[5%] ml-[5%] bg-re-500'>
      <img src="images/camera.png" className='rotate-6 w-82 rounded-xl' alt="" />
      <img src="images/herPic3.png" className='object-contain absolute w-43 ml-12  top-12 rotate-6' alt="" />
    </div>

    <img src="images/herPic7.png" className='w-24 object-contain absolute bottom-20 right-20' alt="" />
    </section>
   
      
    </section>
  )
}

export default LyricalVedio


// It's tiring it exhausting, to get your time. But the problem is me, not you, because it affects me not you. you are absolutly right it's your life your decision,
// we are just part of that decision, i never said anything to control you. How fuck can i control you, if i listen to you, respect you, but sometime i feel something is off i tell you, suggest you, i am not a 
// a boy or bccha, i know how things works, how boys are, that all is to protect you, So understand that, try to understand what the context behind my lines, but i know you don't trust me.
// at starting i know i am little bit cligy but not that clingy, and am asking you to tell me kidr ja rahe ho, ghr phuch ke msg kr dena, that just for to engage with you, and let know you ok. 
// Life is not that essay and i want to be there in any problem to solve it, i don't want to see you in problems. If i ever go away, that will be my one of the Biggest regreat of my life.
// if someting hurt me i tell you, so that you can understand me.I think we share a good bond, becuz i do things for you, and you like that,sometime i feel i am close to you, like there is some special bond, 
// I told you , if someone is taking care of you, let me know, i will get it there is no place for me, and you told me ok, and then you put vivek in same as me. That's hurt, that mean you are also that much frank and feel comfortable with him. 
// but i let it go.. thought you just don't want to push down his efforts.. but you pushed down me too. 