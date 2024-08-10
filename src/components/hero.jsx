import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import Icons from "./icons";

function Hero() {
  const textAnimation = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 300,
  });

  const navigate = useNavigate();
  const handleClick = () => navigate("/contact");

  return (
    <>
      <div class="flex flex-col justify-center items-center bg-[url('/images/hero-bg.jpg')] bg-opacity-35 bg-cover bg-center min-h-screen pt-20 relative">
        <animated.div
          style={textAnimation}
          class="flex flex-col justify-center items-center px-4 md:px-8"
        >
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-snug">
              Hey, I'm Akshay&nbsp;Gopan
            </h1>
          </div>
          <div class="text-center mt-6">
            <p class="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              Welcome to my Portfolio. <br />I Craft Innovative Digital
              Experiences with Code, Creativity, and Precision!
            </p>
          </div>
          <div class="flex flex-col md:flex-row mt-12 gap-4 md:gap-6">
            <button class="py-2 px-6 md:py-3 md:px-8 font-medium bg-violet-500 text-white rounded-sm">
              <a href="documents/Akshay Gopan Resume.pdf" download>
                Resume
              </a>
            </button>
            <button
              class="py-2 px-8 md:py-3 md:px-8 border border-black rounded-sm"
              onClick={handleClick}
            >
              Contact
            </button>
          </div>
        </animated.div>
        <div class="w-2/3 md:w-1/2 mt-10 h-[1px] bg-gray-900 self-center opacity-35"></div>
        <Icons />
      </div>
    </>
  );
}

export default Hero;
