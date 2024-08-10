import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
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

  const buttonAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 100 },
    delay: 200,
  });

  return (
    <>
      <div class="flex flex-col items-center pt-28 bg-[#fafafa] min-h-screen px-4">
        <div class="w-full max-w-4xl text-center">
          <h2 class="text-4xl md:text-5xl font-medium">ABOUT</h2>
          {/* <p class="mt-5 text-lg md:text-xl font-normal leading-6">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p> */}
          <div class="flex justify-center mt-5">
            <img
              src="images/profileimage.png"
              alt="image"
              width={250}
              height={250}
              class="rounded-full"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center  mt-5 w-full max-w-7xl md:gap-10">
          <animated.div
            style={textAnimation}
            class="w-full md:w-1/2 px-2 md:px-6 py-8 md:py-10 text-center md:text-left"
          >
            <p class="text-2xl font-bold mb-3">Get to know me</p>
            <p class="leading-6 text-base">
              I'm a final-year B.Tech Computer Science student at Saintgits
              College of Engineering, Kottayam. I have a strong passion for web
              development and Python programming. Over the course of my studies,
              I've honed my skills in building dynamic web applications using
              modern frameworks like React, React Native, and Tailwind CSS. I'm
              enthusiastic about continuous learning and constantly seeking
              opportunities to expand my technical expertise. Whether it’s
              through contributing to team projects, participating in
              hackathons, or building my own projects, I’m driven by the desire
              to create impactful and innovative solutions. Feel free to explore
              my portfolio to see some of the projects I've worked on, and don't
              hesitate to reach out if you'd like to collaborate or learn more
              about my work!
            </p>
            <button
              class="py-2 px-6 mt-5 font-semibold bg-violet-500 text-white rounded-sm"
              onClick={handleClick}
            >
              See my projects
            </button>
          </animated.div>

          <animated.div
            style={skillAnimation}
            class="w-full md:w-1/2 p-4 md:p-6 mt-2"
          >
            <p class="text-2xl font-bold mb-4 text-center md:text-left">
              Skills
            </p>
            <div class="flex flex-wrap justify-center md:justify-start">
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
              ].map((skill) => (
                <p
                  key={skill}
                  class="mb-4 mr-4 px-4 py-2 text-[#666] bg-[#9993] font-semibold text-lg rounded-md"
                >
                  {skill}
                </p>
              ))}
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
}

export default About;
