import { useSpring, animated } from "react-spring";
import Icons from "./icons";

function Hero() {
  const textAniamtion = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 300,
  });

  return (
    <>
      <div class="flex flex-col justify-center align-middle bg-[url('images/hero-bg.jpg')] bg-opacity-35 bg-cover bg-center h-screen pt-20 -z-20">
        <animated.div
          style={textAniamtion}
          class="flex flex-col justify-center"
        >
          <div class="self-center">
            <h1 class="pt-[50px] text-[80px] font-medium  text-center leading-[88px]">
              Hey, I'm Akshay Gopan
            </h1>
          </div>
          <div class="self-center ">
            <p class=" pt-[40px] text-[20px] font-normal text-center leading-[30px] ">
              Most calendars are designed for teams. Slate is designed for{" "}
              <br /> freelancers who want a simple way to plan their schedule.
            </p>
          </div>
          <div class="flex mt-[50px] self-center  gap-9">
            <button class="py-[10px] px-[30px]  font-medium bg-violet-500 text-white rounded-sm self-center">
              Resume
            </button>
            <button class="py-[10px] px-[30px] border border-black rounded-sm self-center">
              Contact
            </button>
          </div>
        </animated.div>
        <div class="w-1/3 mt-10 h-[1px] bg-gray-900 self-center opacity-35"></div>
        <Icons />
      </div>
    </>
  );
}

export default Hero;
