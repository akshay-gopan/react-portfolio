import { useSpring, animated } from "react-spring";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Icons from "../components/icons";

const Card = (props) => {
  return (
    <>
      <div class="flex flex-col justify-center align-middle gap-3 py-7 px-8 w-72 bg-[#9993] rounded-md">
        <div class="self-center">
          <p class="text-4xl">{props.icon}</p>
        </div>
        <div class="self-center">
          <p class="text-xl font-medium">{props.label}</p>
        </div>
        <div class="self-center">
          <p class="text-xl font-semibold">{props.detail}</p>
        </div>
      </div>
    </>
  );
};

function Contact() {
  const textAniamtion = useSpring({
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

  return (
    <>
      <div class="flex flex-col  align-middle pt-24 mb-24 mt-5 bg-[#fafafa] h-screen w-screen fixed">
        <div class="w-1/2 self-center">
          <h2 class="text-center text-[42px] font-medium ">CONTACT</h2>
          <p class=" mt-7 text-center text-[20px] font-normal leading-5">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <animated.div
          style={textAniamtion}
          class=" flex flex-wrap mt-10 self-center gap-16"
        >
          <div>
            <Card
              icon={<MdEmail />}
              label="Email"
              detail="akshaygopan377@gmail.com"
            />
          </div>
          <div>
            <Card icon={<FaPhoneAlt />} label="Phone" detail="+91 8330059037" />
          </div>
          <div>
            <Card
              icon={<FaLocationDot />}
              label="Location"
              detail="Kottayam, Kerala, India"
            />
          </div>
        </animated.div>
        <div class="w-1/2 mt-10 h-[1px] bg-gray-900 self-center opacity-35"></div>
        <div class="flex justify-center align-middle self-center gap-16">
          <div>
            <animated.button
            style={buttonAnimation}
            class="py-[10px] px-[30px] mt-7 font-semibold bg-violet-500 text-white rounded-sm self-center"

          >
            Download Resume
          </animated.button></div>
          <div><Icons /></div>
        </div>
        <footer class="flex justify-center align-baseline mt-28 w-screen h-10 p-3 bg-[#9993]">
          <p>@copyright 2024, <span class="text-md font-semibold"> Made by Akshay Gopan</span></p>
        </footer>
      </div>
    </>
  );
}

export default Contact;
