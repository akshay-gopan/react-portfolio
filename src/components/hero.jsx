// import { useSpring, animated } from "react-spring";
// import { useNavigate } from "react-router-dom";
// import Icons from "./icons";
// import Particle from "./particles";


// function Hero() {
//   const textAnimation = useSpring({
//     from: { transform: "translateY(50px)", opacity: 0 },
//     to: { transform: "translateY(0px)", opacity: 1 },
//     delay: 300,
//   });

//   const navigate = useNavigate();
//   const handleClick = () => navigate("/contact");
//   // bg-[url('/images/hero-bg.jpg')] bg-opacity-35 bg-cover
//   return (
//     <>
//       <div class="flex flex-col justify-center items-center bg-black bg-center min-h-screen pt-20 text-white relative">
//        <Particle />
//         <animated.div
//           style={textAnimation}
//           class="flex flex-col justify-center items-center px-4 md:px-8"
//         >
//           <div class="text-center">
//             <h1 class="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-snug">
//               Hey, I'm Akshay&nbsp;Gopan
//             </h1>
//           </div>
//           <div class="text-center mt-6">
//             <p class="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
//               Welcome to my Portfolio. <br />I Craft Innovative Digital
//               Experiences with Code, Creativity, and Precision!
//             </p>
//           </div>
//           <div class="flex flex-col md:flex-row mt-12 gap-4 md:gap-6">
//             <button class="py-2 px-6 md:py-3 md:px-8 font-medium bg-violet-500 text-white rounded-sm hover:bg-violet-700">
//               <a href="documents/Akshay Gopan Resume.pdf" download>
//                 Resume
//               </a>
//             </button>
//             <button
//               class="py-2 px-8 md:py-3 md:px-8 border border-violet-500 rounded-sm hover:shadow-sm hover:shadow-violet-400"
//               onClick={handleClick}
//             >
//               Contact
//             </button>
//           </div>
//         </animated.div>
//         <div class="w-2/3 md:w-1/2 mt-10 h-[1px] bg-gray-500 self-center opacity-35"></div>
//         <Icons />
//       </div>
//     </>
//   );
// }

// export default Hero;


import { useSpring, animated, config } from "react-spring";
import { useNavigate } from "react-router-dom";
import Icons from "./icons";
import Particle from "./particles";

function Hero() {
  // Enhanced animations with better timing
  const headingAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 200,
    config: config.gentle
  });

  const subheadingAnimation = useSpring({
    from: { transform: "translateY(30px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 300,
    config: config.gentle
  });

  const buttonsAnimation = useSpring({
    from: { transform: "translateY(30px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 500,
    config: config.gentle
  });

  const iconsAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 700,
    config: { duration: 300 }
  });

  const navigate = useNavigate();
  const handleClick = () => navigate("/contact");

  return (
    <div className="relative flex flex-col justify-center items-center bg-black min-h-screen overflow-hidden">
      {/* Particle background with reduced opacity for better focus */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Particle />
      </div>

      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 max-w-6xl mx-auto">
        {/* Main heading */}
        <animated.div style={headingAnimation} className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-300 to-white">
              Hey, I'm Akshay Gopan
            </span>
          </h1>
        </animated.div>

        {/* Subheading with better typography */}
        <animated.div style={subheadingAnimation} className="text-center max-w-3xl mb-12">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
            Welcome to my Portfolio.{" "}
            <span className="text-violet-400">
              I craft innovative digital experiences with code, creativity, and precision!
            </span>
          </p>
        </animated.div>

        {/* Improved buttons */}
        <animated.div 
          style={buttonsAnimation} 
          className="flex flex-col md:flex-row gap-5 md:gap-8 mb-16"
        >
          <a 
            href="documents/Akshay Gopan Resume.pdf" 
            download
            className="py-3 px-8 font-medium bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/30 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
          
          <button
            onClick={handleClick}
            className="py-3 px-8 border-2 border-violet-500 hover:border-violet-400 text-white rounded-lg transition-all duration-300 hover:bg-violet-900/20 flex items-center justify-center"
          >
            Contact Me
          </button>
        </animated.div>

      
          {/* Divider with gradient effect */}
        <div className="w-full max-w-4xl mb-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        {/* Social icons with animation - making sure it's visible */}
        <animated.div style={iconsAnimation} className="mt-4 mb-8 text-white">
          <Icons />
        </animated.div>
       
      </div>

    </div>
  );
}

export default Hero;