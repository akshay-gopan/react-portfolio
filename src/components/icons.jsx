import { useSpring, animated } from "react-spring";
import { FaXTwitter, FaDiscord, FaLinkedinIn, FaGithub } from "react-icons/fa6";
const Icons = () => {
  const iconAniamtion = useSpring({
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 150, friction: 10 },
    delay: 300,
  });

  return (
    <>
      <animated.div
        style={iconAniamtion}
        class=" flex flex-row gap-10 self-center mt-7"
      >
        <div class="border-[2px] border-black rounded-full p-2 transition-all hover:scale-110 duration-300">
          <a href="https://github.com/akshay-gopan">
            <FaGithub class="size-7 " />
          </a>
        </div>
        <div class="border-[2px] border-black rounded-full p-2 transition-all hover:scale-110 duration-300">
          <a href="https://www.linkedin.com/in/akshaygopanofficial">
            <FaLinkedinIn class="size-7 " />
          </a>
        </div>
        <div class="border-[2px] border-black rounded-full p-2 transition-all hover:scale-110 duration-300">
          <a href="https://x.com/akshay_gopan7">
            <FaXTwitter class="size-7 " />
          </a>
        </div>
        <div class="border-[2px] border-black rounded-full p-2 transition-all hover:scale-110 duration-300">
          <a href="https://discord.com/channels/@akshaygopan">
            <FaDiscord class="size-7 " />
          </a>
        </div>
      </animated.div>
    </>
  );
};
export default Icons;
