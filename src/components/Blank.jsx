// import HerPic from "../assets/herPic8.png";
// import TestImg from "../assets/herPic5.jpeg";
// import nightVedio from "../assets/night_vedio.mp4";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// 050E3C

const Blank = () => {

  const sadVedioRef = useRef();
  const happyFaceRef = useRef();
  const friendsRef = useRef();
  


  useGSAP(()=>{
    gsap.to("#moon",{
       scrollTrigger:{
           trigger:"#moon",
           start:"start bottom",
           end:"start 20%",
           scrub:true

       },
       y:-400,
       x:-200
    })
  })


  const playMusic=(vedioref)=>{

    vedioref.play();
    vedioref.muted=false;
  }


  // You're precious like a gehna, just ignore chaar logo ka kehna aur hamesha haste muskurate rehna..
  
  return (
    <div className="white-shower overflow-hidden relative h-screen flex justify-end w-screen" >
      
      <div className="relative top-[20%] bg-ed-500 right-[28%] translate-x-[50%] h-fit w-80" >
         <img src="images/paperpeice.png" className="w-60 z-0 rotate-12 absolute inset-0" alt="" />
         <p className="bg-hite text-3xl relative z-10 rotate-12 pt-4 p-8" >
          Tujhe ek baat batau! <br /> bol ha! <br /> 
          <button onClick={()=>{playMusic(sadVedioRef.current)}} className="text-lg bg-white p-1 hover:bg-red-600 hover:text-white text-greeny" >Haa Bata !</button>
          <br />
         <span className="text-sm "> 🔼 (click me)</span> </p>
         <video ref={sadVedioRef}  src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822821/sadFace_x0vqs1.mp4" className="w-40 relative -right-34 -top-40 rounded-xl z-20"  muted ></video>
      </div>
      
       
      <div className="relative bg-bue-400 top-[30%] right-[10%] translate-x-[50%] h-fit w-80" >
         <img src="images/paperpeice.png" className="w-60 z-0 -rotate-12 absolute inset-0" alt="" />
         <p className="bg-hite text-3xl relative z-10 -rotate-12 pt-4 p-8" >
          Or ek or Baat, <br /> batau! <br /> 
          <button onClick={()=>{playMusic(happyFaceRef.current)}} className="text-lg bg-white p-1 hover:bg-red-600 hover:text-white text-greeny" >Haa bol !</button>
          <br />
         <span className="text-sm "> 🔼 (click me)</span> </p>
         <video ref={happyFaceRef}  src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822828/youhappy_kn8n2p.mp4" className="w-40 relative -right-34 -top-30 rounded-xl z-20"  muted ></video>
      </div>

       <div className="absolute bg-bue-400 -bottom-[10%] right-[40%] translate-x-[50%] h-fit w-80" >
         <img src="images/paperpeice.png" className="w-60 z-0 -rotate-12 absolute inset-0" alt="" />
         <p className="bg-hite text-3xl relative z-10 -rotate-12 pt-4 p-8" >
          Kya Aap <br /> Dosti karoge ! <br /> 
          <button onClick={()=>{playMusic(friendsRef.current)}} className="text-lg bg-white p-1 hover:bg-red-600 hover:text-white text-greeny" >Haa bol !</button>
          <br />
         <span className="text-sm "> 🔼 (click me)</span> </p>
         <video ref={friendsRef}  src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771861785/Untitled_design_1_cl5rs3.mp4" className="w-40 relative -right-34 -top-25 rounded-xl z-20"  muted ></video>
      </div>

      {/* <div className="relative bg-bue-400 top-[70%] right-[20%] translate-x-[50%] h-fit w-80" >
         <img src="images/paperpeice.png" className="w-60 z-0 -rotate-12 absolute inset-0" alt="" />
         <p className="bg-hite text-3xl relative z-10 -rotate-12 pt-4 p-8" >
          Or ek or Baat, <br /> batau! <br /> 
          <button onClick={()=>{playMusic(happyFaceRef.current)}} className="text-lg bg-white p-1 hover:bg-red-600 hover:text-white text-greeny" >Haa bol !</button>
          <br />
         <span className="text-sm "> 🔼 (click me)</span> </p>
         <video ref={happyFaceRef}  src="vedio/youhappy.mp4" className="w-40 relative -right-34 -top-30 rounded-xl z-20"  muted ></video>
      </div> */}


      {/* <div className="absolute top-10 text-7xl font-bold left-[50%] translate-x-[-50%]" >
      <h1 className=" z-40 text-pinky">Ek Baat Batau!!</h1>
      <div className="absolute top-40 text-4xl flex gap-5 font-bold left-[50%] text-white translate-x-[-50%] z-40" >
        <button onClick={playMusic} className="bg-green-700 p-4 cursor-pointer" >Haan</button>
        <button className="bg-red-700 p-4 cursor-pointer hover:invisble" >Ni</button>
      </div>
      <div className="relative">
      <video ref={sadVedioRef} className="hidde size- mt-30 mx-auto size-80" src="vedio/sadFace.mp4" muted></video>
      </div>
      </div> */}


      <div id="moon" className="bg-re-500 w-40 relative -right-24 top-100 h-fit rounded-full " >
        {/* <img src="images/girl1.png" alt="" /> */}
      <div className="bg-white rounded-full size-40 z-10 blur-3xl absolute" >  </div>
      <img src="images/moon.png" className="object-contain" alt="" />
      </div>

      {/* <img src="images/star.png" className="object-cover w-[100%]" alt="" /> */}

      <img src="images/heartIcon.png" className="size-10 top-60 animate-shake left-[10%] object-cover absolute " alt="" />
      <img src="images/pinkFlower.png" className="size-20 absolute top-50 animate-shake left-[20%] object-cover" alt="" />
      
      <img src="images/herPic8.png" className="w-96 absolute z-40 rounded-4xl top-40 left-[20%] translate-x-[-50%] object-contain" alt="" />
      
      <div className="relative bg-rd-600 top-[30%] flex -left-[90%]" >
      <svg viewBox="0 0 200 200" className="size-[20vw] rotate-150 absolute top-0 left-24 translate-x-[-50%]" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M34.5,-51.7C43.6,-47.7,49.3,-36.4,55.2,-24.8C61.1,-13.3,67.1,-1.4,67.4,11.1C67.8,23.5,62.4,36.5,53.5,45.7C44.5,54.9,31.9,60.3,21.6,54.7C11.3,49.1,3.3,32.5,-9.4,29.8C-22.2,27.1,-39.8,38.4,-49.2,37.2C-58.7,36.1,-60.1,22.5,-56.6,11.4C-53.1,0.3,-44.8,-8.2,-41.1,-19.8C-37.4,-31.5,-38.4,-46.3,-32.3,-51.8C-26.2,-57.2,-13.1,-53.3,-0.2,-53C12.6,-52.6,25.3,-55.8,34.5,-51.7Z" transform="translate(100 100)" />
</svg>
        {/* <h1 className="text-white" >He</h1> */}
      {/* <video src={nightVedio} className="w-screen object-cover bg-grey blur-xs mix-blen" muted autoPlay  ></video> */}
    </div>

     <video src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822819/butterfly1_pedmyj.mp4" muted loop autoPlay className="object-cover left-0 w-80 bottom-20 absolute"></video>

     {/* <img src="images/cloud1.png" className="w-[50%]" alt="" /> */}
     {/* <img src="images/cloud2.png" className="aspect-4/2 object-contain w-[80%] -right-[40%]  absolute z-10 top-0" alt="" />
     <img src="images/cloud3.png" className="aspect-4/2 object-contain absolute right-[40%] top-40 w-[30%]" alt="" />
     <img src="images/cloud4.png" className="aspect-4/2 object-contain absolute top-40 left-[0%] w-[30%]" alt="" /> */}

     {/* <div className="h-[80%] w-[30%] rounded-r-4xl m-10 pape-bg" ></div> */}
    
      
    </div>
  )
}

export default Blank
