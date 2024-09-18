import { useSpring, animated } from "react-spring";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Icons from "../components/icons";
import Card1 from "../components/card1";

// const Card = (props) => {
//   return (
//     <>
//       <div class="flex flex-col justify-center align-middle gap-3 py-7 px-8 w-72 bg-[#9993] rounded-md">
//         <div class="self-center">
//           <p class="text-4xl">{props.icon}</p>
//         </div>
//         <div class="self-center">
//           <p class="text-xl font-medium">{props.label}</p>
//         </div>
//         <div class="self-center">
//           <p class="text-xl font-semibold">{props.detail}</p>
//         </div>
//       </div>
//     </>
//   );
// };

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
      <div class="min-h-screen flex flex-col justify-between bg-black gap-0">
        <div class="flex flex-col items-center pt-24 mt-5 bg-black text-white w-full">
          <div class="w-full max-w-3xl">
            <h2 class="text-center text-4xl md:text-5xl font-medium">
              CONTACT
            </h2>
            <p class="mt-7 text-center text-lg p-4 md:text-xl font-normal leading-6 md:leading-5">
              Feel free to reach out! I'm always open to connecting, whether you
              have a question, an idea, or just want to chat about tech
            </p>
          </div>

          <animated.div
            style={textAniamtion}
            class="flex flex-col justify-center align-middle items-center sm:flex-row mt-10 gap-8 sm:gap-16 w-full max-w-3xl"
          >
            <div class="w-full sm:w-auto flex justify-center">
              <Card1
                icon={<MdEmail />}
                label="Email"
                detail="akshaygopan377@gmail.com"
              />
            </div>
            <div class="w-full sm:w-auto flex justify-center">
              <Card1
                icon={<FaPhoneAlt />}
                label="Phone"
                detail="+91 8330059037"
              />
            </div>
            <div class="w-full sm:w-auto flex justify-center">
              <Card1
                icon={<FaLocationDot />}
                label="Location"
                detail="Kottayam, Kerala, India"
              />
            </div>
          </animated.div>

          <div class="w-full max-w-3xl mt-10 h-[1px] bg-gray-600 self-center opacity-35"></div>

          <div class="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-5">
            <animated.button
              style={buttonAnimation}
              class="py-2 px-6 mt-7 font-semibold bg-violet-500 hover:bg-violet-700 text-white rounded-sm"
            >
              <a href="documents/Akshay Gopan Resume.pdf" download>
                Download Resume
              </a>
            </animated.button>
            <Icons />
          </div>
        </div>
        
        <footer class="flex justify-center w-full h-10 p-2 border-t-2  text-white">
          <p>
            © 2024,{" "}
            <span class="text-md font-semibold">Developed by Akshay Gopan</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Contact;
