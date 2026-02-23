import React, { useRef } from 'react'

const Letter = () => {

  const iSawHerRef = useRef();
  const describeHerRef = useRef();
  const noGoodRef = useRef();
  const soonaHaiRef = useRef();
  const iwilltakecareRef = useRef();
  const yourMorningRef = useRef();

    const playSong=(vedioRef)=>{
    vedioRef.play();
    vedioRef.muted=false;
  }

  return (
    <div className='bg-black overflow-visible relative min-h-screen w-screen'>
      <div className='relative w-80 flex flex-col justify-end h-68 b-red-400'>
     {/* <img src="images/cd.png" className='absolute inset-0 w-40 z-0  object-contain' alt="" /> */}
     <img src="images/paperpeice.png" className='w-80 rounded-xl skew-2 top-10 left-5  absolute' alt="" />
     <img src="images/111.jpeg" className='w-60 object-contain z-10 absolute top-20 left-16 rounde-lg bg-rd-500' alt="" />
     <img src="images/pink-bow.png" className='w-20 absolute z-20 top-12 rotate-45 -right-3' alt="" />
     <img src="images/pinkFlower.png" className='w-26 absolute z-10 bottom-10 rotate-45 -left-' alt="" />
     <div className='flex justify-center gap-10'>
     {/* <img src="images/teddy2.png" className='w-20 object-contain ml-20 z-10' alt="" /> */}
     {/* <img src="images/camera2.png"  className='w-20 object-contain z-10' alt="" /> */}
     </div>
     {/* <p className='z-10 ml-20 text-2xl' >You're Eye ..</p> */}
     {/* <p className='z-10 ml-20' >Got my heart.. and i am falling for you..</p> */}
     </div>

     <div  className='w-[30vw] absolute right-[55%] translate-x-[50%] top-20 bgred-400 ' >
       <img src="images/paperpeice.png" className='absolute inset-0 skew-2 object-contain' alt="" />
       <p className='relative top-8 text-lg left-20'><span className='text-4xl' >Ok,</span> <br />
       Wanna seen my first reaction <br /> when i saw you ! <button onClick={()=>{playSong(iSawHerRef.current)}} className='text-greeny' > - click me - </button> </p>
       <video ref={iSawHerRef} src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822818/isawher2_mzatwo.mp4" muted className='w-40 mt-10 ml-20 relative z-10'></video>
     </div>

     <div  className='w-[30vw] absolute right-[2%] z-10 top-10 bgred-400 ' >
       <img src="images/paperpeice.png" className='absolute inset-0 skew-2 object-contain' alt="" />
       <p className='relative top-8 text-lg left-20'><span className='text-4xl' >And ha,</span> <br />
       Ha haaa,<br /> <button onClick={()=>{playSong(soonaHaiRef.current)}} className='text-greeny' > - yahi  - </button> </p>
       <video ref={soonaHaiRef} src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822824/tumsehi2_ngultd.mp4" muted className='w-40 mt-10 ml-20 relative z-10'></video>
     </div>

     <div  className='w-[30vw] absolute right-[20%]  top-90 bgred-400 ' >
       <img src="images/paperpeice.png" className='absolute inset-0 skew-2 object-contain' alt="" />
       <p className='relative top-8 text-lg left-20'><span className='text-4xl' >And,</span> <br />
       You know how i describe you to everyone<br /> who ask me about you ! <button onClick={()=>{playSong(describeHerRef.current)}} className='text-greeny' > - click me - </button> </p>
       <video ref={describeHerRef} src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822818/describingher_hfvmap.mp4" muted className='w-40 mt-10 ml-20 relative z-10'></video>
     </div>

      <div  className='w-[28vw] absolute left-[0%]  top-80 bgred-400 ' >
       <img src="images/paperpeice.png" className='absolute inset-0 skew-2 object-contain' alt="" />
       <p className='relative top-8 text-lg left-20'><span className='text-4xl' >Or yrr,</span>
       <br /> baat kuch essi hai!! <button onClick={()=>{playSong(noGoodRef.current)}} className='text-greeny' > - dekho - </button> </p>
       <video ref={noGoodRef} src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822819/nogood_ulecay.mp4" muted className='w-40 mt-10 ml-20 relative z-10'></video>
     </div>

      <div  className='w-[28vw] absolute left-[20%]  -bottom-20 bgred-400 ' >
       <img src="images/paperpeice.png" className='absolute inset-0 skew-2 object-contain' alt="" />
       <p className='relative top-8 text-lg left-20'><span className='text-4xl' >or sacchi mai,</span>
       <br /> 😂 sach bol raahe hai hum  <button onClick={()=>{playSong(iwilltakecareRef.current)}} className='text-greeny' > - ki - </button> </p>
       <video ref={iwilltakecareRef} src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771858888/iwilltakecare_1_zfvfvm.mp4" muted className='w-50 mt-10 ml-20 relative z-10'></video>
     </div>

          <div  className='w-[28vw] absolute right-[0%]  -bottom-20 bgred-400 ' >
       <img src="images/paperpeice.png" className='absolute inset-0 skew-2 object-contain' alt="" />
       <p className='relative top-8 text-lg left-20'><span className='text-4xl' >And if i,</span>
       <br /> told you  <button onClick={()=>{playSong(yourMorningRef.current)}} className='text-greeny' > - that - </button> </p>
       <video ref={yourMorningRef} src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771858902/yourmorng_pouwju.mp4" muted className='w-50 mt-10 ml-20 relative z-10'></video>
     </div>

     <div>

     </div>

    </div>
  )
}

export default Letter
