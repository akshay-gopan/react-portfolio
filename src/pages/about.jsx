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
      <div class="flex flex-col justify-center align-middle pt-24 pb-24 mt-5 h-screen bg-[#fafafa] -z-20 fixed">
        <div class="w-1/2 self-center">
          <h2 class="text-center text-[42px] font-medium mt-5">ABOUT</h2>
          <p class=" mt-5 text-center text-[20px] font-normal leading-5">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div class="flex flex-wrap justify-center align-middle">
          <animated.div
            style={textAnimation}
            class="w-1/2 px-20 py-16 self-center "
          >
            <p class="text-2xl font-bold mb-3">Get to know me</p>
            <div>
              <p class=" leading-relaxed">
                I'm a Frontend Focused Web Developer building and managing the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section. I also like sharing content related to the
                stuff that I have learned over the years in Web Development so
                it can help other people of the Dev Community. Feel free to
                Connect or Follow me on my Linkedin and Instagram where I post
                useful content related to Web Development and Programming I'm
                open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me
              </p>
            </div>
          </animated.div>
          <animated.div style={skillAnimation} class="w-1/2 p-16 self-center">
            <p class="text-2xl font-bold mb-4">Skills</p>
            <div class="flex flex-wrap">
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Python
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Javascript
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                React
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                React Native
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Node.js
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Expres.js
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Tailwind CSS
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                SASS
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                HTML
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                MySQL
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                MongoBD
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Firebase
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                Git
              </p>
              <p class="mb-6 mr-6 px-4 py-3 text-[#666] bg-[#9993] font-semibold text-lg rounded-md">
                GitHub
              </p>
            </div>
          </animated.div>
        </div>
        <animated.button
          style={buttonAnimation}
          class="py-[10px] px-[30px]  font-semibold bg-violet-500 text-white rounded-sm self-center"
          onClick={handleClick}
        >
          See my projects
        </animated.button>
      </div>
    </>
  );
}

export default About;
