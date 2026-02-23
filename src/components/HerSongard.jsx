import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const HerSongard = () => {

  const vedioRef = useRef();
  const vedioRef1 = useRef();
  const vedioRef2 = useRef();

  const[play, setPlay] = useState(false);
  const[progress, setProgress] = useState(0);

  const[play1, setPlay1] = useState(false);
  const[progress1, setProgress1] = useState(0);

  const[play2, setPlay2] = useState(false);
  const[progress2, setProgress2] = useState(0);



 const playSong1=()=>{
    setPlay1((prev)=>!prev);
    gsap.to(vedioRef1.current,{
      boxShadow:"5px 5px 20px white"
    });
    console.log(play1);
    if(play1){
       vedioRef1.current.pause();
       console.log(vedioRef1.current);
       
       return;
    } 
    vedioRef1.current.play();
    vedioRef1.current.muted=false;
  }


  const playSong2=()=>{
    setPlay2((prev)=>!prev);
    gsap.to(vedioRef2.current,{
      boxShadow:"5px 5px 20px white"
    });
    console.log(play2);
    if(play2){
       vedioRef2.current.pause();
       console.log(vedioRef2.current);
       
       return;
    } 
    vedioRef2.current.play();
    vedioRef2.current.muted=false;
  }

  const playSong=()=>{
    setPlay((prev)=>!prev);
    gsap.to(vedioRef.current,{
      boxShadow:"5px 5px 20px white"
    });
    console.log(play);
    if(play){
       vedioRef.current.pause();
       console.log(vedioRef.current);
       
       return;
    } 
    vedioRef.current.play();
    vedioRef.current.muted=false;
  }


  const VedioTimeline=()=>{
    const percentage =  (vedioRef.current.currentTime/ vedioRef.current.duration)*100;
    setProgress(percentage.toFixed(0));
  }

   const VedioTimeline1=()=>{
    const percentage =  (vedioRef1.current.currentTime/ vedioRef1.current.duration)*100;
    setProgress1(percentage.toFixed(0));
  }

   const VedioTimeline2=()=>{
    const percentage =  (vedioRef2.current.currentTime/ vedioRef2.current.duration)*100;
    setProgress2(percentage.toFixed(0));
  }

  return (
    <section className='red-shower relative min-h-screen overflow-hidden w-screen'>

    <section className='relative top-20 left-20 w-[40%]' > {/* <h1>Hello</h1> */}
    <img src="images/SongCardBg.jfif"  className="absolute rounded-xl bg-blend-color inset-0 ml-0 w-full" alt="" />
    <div className='relative z-10 flex h-full w-full items-center justify-start p-10' >
    <div className='text-white size-60 flex flex-col p-2 items-center gap-3 bg-black'>
    <div className='size-52 bg-pinky flex'> <img src="images/herPicTp.png" className='object-cover w-fit' alt="" /> </div>
    <div className='h-2 bg-white w-52 rounded-full p-[1px]'> <div style={{width:`${progress}%`}} className={`bg-red-500 rounded-full h-1`} ></div> </div>
    <div className='flex gap-5 text-3xl' > <button>⏪</button>  <button onClick={playSong} className={`flex items-center cursor-pointer justify-center ${play ? "text-red-500 hover:text-white-500 active:text-red-500": "text-white hover:text-red-500 active:text-white"}`} >{ play ? "⏸️" : "▶"}</button> <button>⏩</button> </div>
    </div>
    </div>
    </section>



    
    <section className="bg-[url('/images/bgforPic4.png')] absolute flex flex-col items-center justify-end right-[32%] border-4 brder-blue-500 top-20 bg-cover bg-no-repeat w-80 h-100 rounded-xl">
    <img src="images/herPic2.png" className='object-cover w-fit' alt="" />

    <div className='bg-red-0  bg-black w-full py-2' >
      <div className='h-2 w-full p-[1px] rounded-lg bg-white'>
       <div style={{width:`${progress1}%`}} className={`bg-red-500 rounded-full h-1`} ></div> 
      </div>

      <div className='flex w-full bg-ed-700 justify-center mt-2 gap-5 text-3xl' > 
        <button>⏪</button>
        <button onClick={playSong1} className={`flex items-center cursor-pointer justify-center ${play1 ? "text-red-500 hover:text-white-500 active:text-red-500": "text-white hover:text-red-500 active:text-white"}`} >{ play1 ? "⏸️" : "▶"}</button>
        <button>⏩</button> 
      </div>

    </div>
    </section>

    <section className="bg-[url('/images/bgforPic3.gif')] absolute flex flex-col items-center justify-end right-[10%] border-4 brder-blue-500 top-20 bg-cover bg-no-repeat w-72 h-100 rounded-xl" >
    <img src="images/herPic12.png" className='object-cover h-[70%] w-fit ' alt="" />
    <div className='bg-red-0  bg-black w-full py-2' >
        <div className='h-2 w-full p-[1px] rounded-lg bg-white'>

       <div style={{width:`${progress2}%`}} className={`bg-red-500 rounded-full h-1`} ></div> 
      </div>

      <div className='flex w-full bg-ed-700 justify-center mt-2 gap-5 text-3xl' > 
        <button>⏪</button>
        <button onClick={playSong2} className={`flex items-center cursor-pointer justify-center ${play2 ? "text-red-500 hover:text-white-500 active:text-red-500": "text-white hover:text-red-500 active:text-white"}`} >{ play2 ? "⏸️" : "▶"}</button>
        <button>⏩</button> 
      </div>

    </div>
    </section>

    <section className='absolute bottom-0 left-24 flex' >
      {/* <h1 className='text-white' >{progress}</h1> */}
      <img src="images/girlPic.jfif" className='bg-red-4 object-contain size-64  rounded-xl absolut bottom-0'></img>
      {/* <img src="images/girl.png" className='size-140 -rotate-90 object-contain' alt="" /> */}
          </section>

    <video ref={vedioRef} onTimeUpdate={VedioTimeline} onEnded={()=>setPlay(false)}  className='hidde w-40 absolute shadow-2xl bottom-11 left-100' src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822822/notPreety_gzwig1.mp4" muted ></video>
    <video ref={vedioRef1} onTimeUpdate={VedioTimeline1} onEnded={()=>setPlay1(false)}  className='hidde w-40 absolute shadow-2xl bottom-8 left-[50%] bg-red-500' src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822822/talktoher_doiuvu.mp4" muted ></video>
    <video ref={vedioRef2} onTimeUpdate={VedioTimeline2} onEnded={()=>setPlay2(false)}  className='hidde w-40 absolute shadow-2xl bottom-8 left-[75%] bg-red-500' src="https://res.cloudinary.com/dkfyjxlwf/video/upload/v1771822815/abouther_doguvf.mp4" muted ></video>
    </section>
  )
}

export default HerSongard
