// import { useNavigate } from "react-router-dom";
// import { useSpring, animated } from "react-spring";
// import Card2 from "../components/card2";
// import Particle from "../components/particles";

// function About() {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/projects");
//   };

//   const textAnimation = useSpring({
//     from: { transform: "translateX(-50px)", opacity: 0 },
//     to: { transform: "translateX(0px)", opacity: 1 },
//     config: { tension: 100 },
//     delay: 200,
//   });
//   const skillAnimation = useSpring({
//     from: { transform: "translateX(50px)", opacity: 0 },
//     to: { transform: "translateX(0px)", opacity: 1 },
//     config: { tension: 100 },
//     delay: 200,
//   });

//   const buttonAnimation = useSpring({
//     from: { transform: "translateY(50px)", opacity: 0 },
//     to: { transform: "translateY(0px)", opacity: 1 },
//     config: { tension: 100 },
//     delay: 200,
//   });

//   return (
//     <>
//       <div class="flex flex-col items-center pt-28 bg-black text-white min-h-screen px-4">
        
//         <div class="w-full max-w-4xl text-center">
//           <h2 class="text-4xl md:text-5xl font-medium">ABOUT</h2>
//           {/* <p class="mt-5 text-lg md:text-xl font-normal leading-6">
//             Here you will find more information about me, what I do, and my
//             current skills mostly in terms of programming and technology.
//           </p> */}
//           <div class="flex justify-center mt-5">
//             <img
//               src="images/profileimage.png"
//               alt="image"
//               width={250}
//               height={250}
//               class="rounded-full"
//             />
//           </div>
//         </div>

//         <div class="flex flex-col md:flex-row justify-center  mt-5 w-full max-w-7xl md:gap-10">
//           <animated.div
//             style={textAnimation}
//             class="w-full md:w-1/2 px-2 md:px-6 py-8 md:py-10 text-center md:text-left"
//           >
//             <p class="text-2xl font-bold mb-3">Get to know me</p>
//             <p class="leading-6 text-base">
//               I'm a final-year B.Tech Computer Science student at Saintgits
//               College of Engineering, Kottayam. I have a strong passion for web
//               development and Python programming. Over the course of my studies,
//               I've honed my skills in building dynamic web applications using
//               modern frameworks like React, React Native, and Tailwind CSS. I'm
//               enthusiastic about continuous learning and constantly seeking
//               opportunities to expand my technical expertise. Whether it’s
//               through contributing to team projects, participating in
//               hackathons, or building my own projects, I’m driven by the desire
//               to create impactful and innovative solutions. Feel free to explore
//               my portfolio to see some of the projects I've worked on, and don't
//               hesitate to reach out if you'd like to collaborate or learn more
//               about my work!
//             </p>
//             <button
//               class="py-2 px-6 mt-5 font-semibold bg-violet-500 text-white hover:bg-violet-700 rounded-sm"
//               onClick={handleClick}
//             >
//               See my projects
//             </button>
//           </animated.div>

//           <animated.div
//             style={skillAnimation}
//             class="w-full md:w-1/2 p-4 md:p-6 mt-2"
//           >
//             <p class="text-2xl font-bold mb-4 text-center md:text-left">
//               Skills
//             </p>
//             <div class="flex flex-wrap justify-center md:justify-start">
//               {[
//                 "Python",
//                 "Javascript",
//                 "React",
//                 "React Native",
//                 "Node.js",
//                 "Express.js",
//                 "Tailwind CSS",
//                 "SASS",
//                 "HTML",
//                 "MySQL",
//                 "MongoDB",
//                 "Firebase",
//                 "Git",
//                 "GitHub",
//                 "Postman",
                
//               ].map((skill) => (
//                 <p
//                   key={skill}
//                   class="mb-4 mr-4 px-4 py-2 text-[#999] hover:text-violet-500 bg-[#9992] font-semibold text-lg rounded-md"
//                 >
//                   {skill}
//                 </p>
//               ))}
//             </div>
//           </animated.div>
//         </div>
//         <div class="flex flex-col justify-center">
//         <div class="text-center">
//         <p class="text-2xl font-bold mb-4 ">
//               Achievements
//             </p>
//         </div>
          
//           <div class="flex flex-wrap justify-center md:justify-start">
//   {Object.entries({
//     0: {
//       label: "Hackathon Winner",
//       detail:"Hacks'Us 2023 ",
//       host: "Rajagiri School of Engineering and Technology, Ernakulam",
//       img: "/images/hacksus.jpg"
//     },
//     1: {
//       label: "Hackathon Winner",
//       detail:"HackAthene 2024",
//       host: "Jyothi Engineering College, Thrissur",
//       img: "/images/hackathena.jpg"
//     },
//     2: {
//       label: "Hackathon 1st Runnerup",
//       detail:"HackBells 2024",
//       host: "Sree Buddha College of Engineering, Alappuzha",
//       img: "/images/hackbells.png"
//     },
//     3: {
//       label: "Top 5 Team",
//       detail:"Code reCET 2024 ",
//       host: "Govt.College of Engineering, Trivandrum",
//       img: "/images/coderecet.jpg"
//     },

    
  
    
//   }).map(([key, {label, detail, host, img}]) => (
//     <p
//       key={key}
//       class="mb-4 mr-4 px-4 py-2  font-semibold text-lg rounded-md"
//     >
//       <Card2 label={label} detail={detail} host={host} img={img}/>
//     </p>
//   ))}
// </div>

          
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;


import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Card2 from "../components/card2";
import Particle from "../components/particles";

function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };

  const textAnimation = useSpring({
    from: { transform: "translateX(-50px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { tension: 100 },
    delay: 200,
  });
  
  const skillAnimation = useSpring({
    from: { transform: "translateX(50px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { tension: 100 },
    delay: 200,
  });

  const fadeInAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 80 },
    delay: 300,
  });

  const buttonAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 100 },
    delay: 200,
  });

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background with subtle particle effect */}
      <Particle />
      
      <div className="flex flex-col items-center pt-20 lg:pt-28 px-4 sm:px-8 lg:px-12 relative">
        {/* Header Section with improved styling */}
        <animated.div style={fadeInAnimation} className="w-full max-w-4xl text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-semibold   text-white">
            ABOUT ME
          </h2>
          
          <div className="flex justify-center mt-8 mb-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 blur-md opacity-70"></div>
              <img
                src="images/profileimage.png"
                alt="Profile"
                width={250}
                height={250}
                className="rounded-full relative border-4 border-violet-500 shadow-xl object-cover"
              />
            </div>
          </div>
        </animated.div>

        {/* Main content with cards layout */}
        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12 w-full max-w-7xl mb-16">
          {/* About Me Card */}
          <animated.div
            style={textAnimation}
            className="w-full md:w-1/2 bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-xl border border-violet-700/30 overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
               Get to know me
              </h3>
              <p className="leading-relaxed text-gray-300">
                I'm a final-year B.Tech Computer Science student at Saintgits
                College of Engineering, Kottayam. I have a strong passion for web
                development and Python programming. Over the course of my studies,
                I've honed my skills in building dynamic web applications using
                modern frameworks like React, React Native, and Tailwind CSS.
              </p>
              <p className="leading-relaxed text-gray-300 mt-3">
                I'm enthusiastic about continuous learning and constantly seeking
                opportunities to expand my technical expertise. Whether it's
                through contributing to team projects, participating in
                hackathons, or building my own projects, I'm driven by the desire
                to create impactful and innovative solutions.
              </p>
              <animated.button
                style={buttonAnimation}
                className="py-3 px-8 mt-6 font-semibold bg-violet-600 text-white hover:bg-violet-700 rounded-lg flex items-center"
                onClick={handleClick}
              >
                <span>See my projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </animated.button>
            </div>
          </animated.div>

          {/* Skills Card */}
          <animated.div
            style={skillAnimation}
            className="w-full md:w-1/2 bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-xl border border-violet-700/30 overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
               Technical Skills
              </h3>
              <div className="flex flex-wrap">
                {[
                  "Python",
                  "Javascript",
                  "React",
                  "React Native",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "SASS",
                  "HTML",
                  "MySQL",
                  "MongoDB",
                  "Firebase",
                  "Git",
                  "GitHub",
                  "Postman",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="mb-3 mr-3 px-4 py-2 bg-gradient-to-r from-violet-900/40 to-violet-800/30 text-violet-100 font-medium text-sm rounded-full border border-violet-500/20 hover:border-violet-500 transition-all duration-300 hover:shadow-md hover:shadow-violet-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </animated.div>
        </div>

        {/* Achievements Section with improved layout */}
        <animated.div style={fadeInAnimation} className="w-full max-w-7xl mb-20">
          <h3 className="text-4xl font-semibold mb-10 text-center bg-clip-text">
             Achievements
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries({
              0: {
                label: "Hackathon Winner",
                detail: "Hacks'Us 2023",
                host: "Rajagiri School of Engineering and Technology, Ernakulam",
                img: "/images/hacksus.jpg"
              },
              1: {
                label: "Hackathon Winner",
                detail: "HackAthene 2024",
                host: "Jyothi Engineering College, Thrissur",
                img: "/images/hackathena.jpg"
              },
              2: {
                label: "Hackathon 1st Runnerup",
                detail: "HackBells 2024",
                host: "Sree Buddha College of Engineering, Alappuzha",
                img: "/images/hackbells.png"
              },
              3: {
                label: "Top 5 Team",
                detail: "Code reCET 2024",
                host: "Govt.College of Engineering, Trivandrum",
                img: "/images/coderecet.jpg"
              },
            }).map(([key, { label, detail, host, img }]) => (
              <div key={key} className="transform transition-all duration-300 hover:-translate-y-2">
                <Card2 label={label} detail={detail} host={host} img={img} />
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default About;
