// import { useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import CategorySection from "./CategorySection";

// gsap.registerPlugin(ScrollTrigger);

// export default function TeddyShower() {
//  const container = useRef();
//  const [teddies] = useState(() => 
//   Array.from({ length: 200 }, (_, i) => ({
//     id: i,
//     left: Math.random() * 100
//   }))
// );

//   useGSAP(() => {
//     const ctx = gsap.context(() => {

//       // 🎬 Scroll Timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           pin: true,
//         //   pinSpacing: false,
//         },
//       });

//       tl.to(".hero-title", {
//         scale: 2,
//         y: -200,
//         opacity: 0,
//         duration: 1,
//       });
      
//       tl.to(".hero-bg", {
//         backgroundColor: "#f5f5f5",
//         duration: 1,
//       }, "<");

//       tl.to(".teddy", {
//         opacity: 0,
//         duration: 1,
//       }, "<");
      
//       // Add breathing room after animation completes
//       tl.add("done");

  

//       // 🧸 Parallax Effect
//       // 🧸 Continuous falling effect (independent of scroll)
// gsap.utils.toArray(".teddy").forEach((el) => {
//   const duration = gsap.utils.random(6, 12);
//   const startY = gsap.utils.random(-window.innerHeight, 0);

//   gsap.set(el, {
//     y: startY,
//     // left: `${Math.random() * 100}%`,
//   });

//   gsap.to(el, {
//   y:window.innerHeight,
//   x: "+=50",
//   duration,
//   ease: "none",
//   repeat: -1,
// });
// });


//     }, );

//     return () => ctx.revert();
//   }, []);


//   return (
//     // <section ref={container}>
//     <section ref={container} className='relative isolate bg-pinky min-h-screen w-screen hero-bg flex items-center justify-center' >
//     <h1  className='text-9xl font-bold text-white hero-title text-center' >YO, WHAT'S UP ! <span className=''>TEDDY</span> </h1>
//    {teddies.map((teddy, i) => {
//   let leftValue = teddy.left;
//   return (
//     <li
//       key={i}
//       className="teddy absolute"
//       style={{
//         left: `${leftValue}%`,
//         top: `0px`,
//       }}
//     >
//       🧸
//     </li>
//   );
// })}
//     </section> 
//     // </section>
//   )
// }


import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CategorySection from "./CategorySection";

gsap.registerPlugin(ScrollTrigger);

export default function TeddyShower() {
//   const container = useRef();
  const [teddies] = useState(() =>
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      startY: gsap.utils.random(-window.innerHeight, 0),
    }))
  );

  const headingRef = useRef();


  useGSAP(() => {


     
    gsap.to(headingRef.current, { 
        scrollTrigger:{
            trigger: headingRef.current,
            start: "top 40%",
            scrub:1, // smoothly animate based on scroll position
            // pinSpacing:false,
            // pin:true // keep the  heading fixed in place while the animation occurs
        },
        scale:10,
        y:200

  });



    // const ctx = gsap.context(() => {
    //   // 🎬 Scroll Timeline
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: container.current,
    //       start: "top top",
    //       end: "+=1000",
    //       scrub: true,
    //       pin: true,
    //     },
    //   });

    //   tl.to(".hero-title", {
    //     scale: 2,
    //     y: -200,
    //     opacity: 0,
    //     duration: 1,
    //   });

    //   tl.to(".hero-bg", {
    //     backgroundColor: "#f5f5f5",
    //     duration: 1,
    //   }, "<");

    //   tl.to(".teddy", {
    //     opacity: 0,
    //     duration: 1,
    //   }, "<");

      // 🧸 Falling teddies (time-based, not scroll-based)
      gsap.utils.toArray(".teddy").forEach((el, index) => {
        const duration = gsap.utils.random(6, 12);

        gsap.set(el, {
          y: teddies[index].startY,
        });

        gsap.to(el, {
          y: window.innerHeight,
          x: "+=50",
          duration,
          ease: "none",
          repeat: -1,
        });
      });

    }, );

    // return () => ctx.revert();
//   }, []);

  return (
    <>
      <section className='relative overflow-hidden isolate bg-pinky min-h-screen w-screen hero-bg flex items-center justify-center'>
        <h1 ref={headingRef} className='text-9xl font-bold text-white hero-title text-center'>
          YO, WHAT'S UP! <span className=''>TEDDY</span>
        </h1>
        {/* {teddies.map((teddy, i) => (
          <li
            key={i}
            className="teddy absolute text-4xl"
            style={{
              left: `${teddy.left}%`,
              top: `0px`,
            }}
          >
            🧸
          </li>
        ))} */}
      </section>

      {/* Add CategorySection here */}
      {/* <CategorySection /> */}
    </>
  );
}
