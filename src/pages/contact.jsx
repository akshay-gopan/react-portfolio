// import { useSpring, animated } from "react-spring";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import Icons from "../components/icons";
// import Card1 from "../components/card1";
// import Particle from "../components/particles";



// function Contact() {
//   const textAniamtion = useSpring({
//     from: { transform: "translateY(50px)", opacity: 0 },
//     to: { transform: "translateY(0px)", opacity: 1 },
//     delay: 300,
//   });
//   const buttonAnimation = useSpring({
//     from: { transform: "translateY(-50px)", opacity: 0 },
//     to: { transform: "translateY(0px)", opacity: 1 },
//     config: { tension: 150, friction: 10 },
//     delay: 300,
//   });

//   return (
//     <>
//       <div class="min-h-screen flex flex-col justify-between bg-black gap-0">
//         <Particle />
//         <div class="flex flex-col items-center pt-24 mt-5 bg-black text-white w-full">
//           <div class="w-full max-w-3xl">
//             <h2 class="text-center text-4xl md:text-5xl font-medium">
//               CONTACT
//             </h2>
//             <p class="mt-7 text-center text-lg p-4 md:text-xl font-normal leading-6 md:leading-5">
//               Feel free to reach out! I'm always open to connecting, whether you
//               have a question, an idea, or just want to chat about tech
//             </p>
//           </div>

//           <animated.div
//             style={textAniamtion}
//             class="flex flex-row flex-wrap justify-center align-middle items-center mt-10 gap-4 w-full  sm:flex-row sm:gap-16"
//           >
//             <div class="w-full sm:w-auto flex justify-center">
//               <Card1
//                 icon={<MdEmail />}
//                 label="Email"
//                 detail="akshaygopan377@gmail.com"
//               />
//             </div>
//             <div class="w-full sm:w-auto flex justify-center">
//               <Card1
//                 icon={<FaPhoneAlt />}
//                 label="Phone"
//                 detail="+91 8330059037"
//               />
//             </div>
//             <div class="w-full sm:w-auto flex justify-center">
//               <Card1
//                 icon={<FaLocationDot />}
//                 label="Location"
//                 detail="Kottayam, Kerala, India"
//               />
//             </div>
//           </animated.div>

//           <div class="w-full max-w-3xl mt-10 h-[1px] bg-gray-600 self-center opacity-35"></div>

//           <div class="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-5">
//             <animated.button
//               style={buttonAnimation}
//               class="py-2 px-6 mt-7 font-semibold bg-violet-500 hover:bg-violet-700 text-white rounded-sm"
//             >
//               <a href="documents/Akshay Gopan Resume.pdf" download>
//                 Download Resume
//               </a>
//             </animated.button>
//             <Icons />
//           </div>
//         </div>
        
//         <footer class="flex justify-center w-full h-10 p-2 border-t-2  text-white">
//           <p>
//             © 2024,{" "}
//             <span class="text-md font-semibold">Developed by Akshay Gopan</span>
//           </p>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default Contact;


import { useSpring, animated } from "react-spring";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdFileDownload } from "react-icons/md";
import Icons from "../components/icons";
import Card1 from "../components/card1";
import Particle from "../components/particles";

function Contact() {
  const textAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 300,
  });
  
  const buttonAnimation = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 150, friction: 10 },
    delay: 300,
  });
  
  const fadeInAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative">
      {/* Background particle effect with reduced opacity for better content visibility */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Particle />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center pt-24 pb-16 px-4 sm:px-8 w-full relative">
        <animated.div style={fadeInAnimation} className="w-full max-w-3xl mb-10">
          <h2 className="text-center text-5xl md:text-6xl font-semibold bg-clip-text ">
            GET IN TOUCH
          </h2>
          
          <p className="mt-7 text-center text-lg md:text-xl font-normal leading-relaxed text-gray-300 px-4">
            Feel free to reach out! I'm always open to connecting, whether you
            have a question, an idea, or just want to chat about tech.
          </p>
        </animated.div>

        {/* Contact cards with improved styling */}
        <animated.div
          style={textAnimation}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 w-full max-w-5xl"
        >
          {/* Email Card */}
          <div className="transform transition-all duration-300 hover:-translate-y-2 flex justify-center">
            <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl shadow-xl border border-violet-700/30 w-full max-w-xs">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-violet-800/30 text-violet-400 mb-4">
                  <MdEmail className="text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-violet-300 mb-2">Email</h3>
                <p className="text-lg font-semibold text-white break-all">
                  akshaygopan377@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="transform transition-all duration-300 hover:-translate-y-2 flex justify-center">
            <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl shadow-xl border border-violet-700/30 w-full max-w-xs">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-violet-800/30 text-violet-400 mb-4">
                  <FaPhoneAlt className="text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-violet-300 mb-2">Phone</h3>
                <p className="text-lg font-semibold text-white">
                  +91 8330059037
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="transform transition-all duration-300 hover:-translate-y-2 flex justify-center sm:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl shadow-xl border border-violet-700/30 w-full max-w-xs">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-violet-800/30 text-violet-400 mb-4">
                  <FaLocationDot className="text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-violet-300 mb-2">Location</h3>
                <p className="text-lg font-semibold text-white">
                  Kottayam, Kerala, India
                </p>
              </div>
            </div>
          </div>
        </animated.div>

        {/* Divider with glowing effect */}
        <div className="w-full max-w-4xl mt-16 mb-8 relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-2 border-violet-600 flex items-center justify-center">
            {/* <span className="text-violet-500 text-xl">✨</span> 
          </div> */}
        </div>

        {/* Resume and social section */}
        <div className="flex flex-col sm:flex-row justify-center items-center align-top gap-8 sm:gap-16 mt-7 w-full max-w-3xl">
          <animated.button
            style={buttonAnimation}
            href="documents/Akshay Gopan Resume.pdf" 
            download
            className="py-3 px-8 font-semibold bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white rounded-lg  flex items-center"
          >
            <MdFileDownload className="mr-2 text-xl" />
            Download Resume
          </animated.button>
          
          <div className="scale-110">
            <Icons />
          </div>
        </div>
      </div>
      
      {/* Footer with subtle gradient border */}
      <footer className="w-full py-4 border-t border-gray-800 bg-black/80 relative z-10">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <p className="text-center text-gray-400">
          © 2025,{" "}
          <span className="text-violet-400 font-semibold">Developed by Akshay Gopan</span>
        </p>
      </footer>
    </div>
  );
}

export default Contact;
