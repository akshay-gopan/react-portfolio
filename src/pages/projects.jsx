import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Projects() {
  const imageAnimation = useSpring({
    from: { transform: "translateX(-50px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { tension: 100 },
    delay: 300,
  });
  const textAnimation = useSpring({
    from: { transform: "translateX(50px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { tension: 100 },
    delay: 300,
  });

  return (
    <>
      <div class="flex flex-col justify-center align-middle pt-24 mb-24 mt-5 bg-[#fafafa]">
        <div class="w-1/2 self-center">
          <h2 class="text-center text-[42px] font-medium ">PROJECTS</h2>
          <p class=" mt-5 text-center text-[20px] font-normal leading-5">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        <div class="flex justify-around align-middle mt-[100px]">
          <animated.div
            style={imageAnimation}
            class="w-3/5 flex justify-center self-center"
          >
            <img
              src="images/img5.png"
              alt="image"
              class=" w-2/3 h-[450px] self-center"
            />
          </animated.div>
          <animated.div
            style={textAnimation}
            class="w-2/5 flex flex-col self-center"
          >
            <h3 class="font-semibold text-[30px] mb-9">Project name</h3>
            <p class="w-2/3 font-normal ">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.Most
              calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div class="flex mt-10 gap-10">
              <button class="py-3 px-4 border bg-violet-500 text-white font-medium">
                Live Demo
              </button>
              <button class="py-3 px-7 border border-black font-medium">
                GitHub
              </button>
            </div>
          </animated.div>
        </div>

        <div class="flex justify-around align-middle mt-[100px]">
          <animated.div
            style={imageAnimation}
            class="w-3/5 flex justify-center self-center"
          >
            <img
              src="images/img5.png"
              alt="image"
              class=" w-2/3 h-[450px] self-center"
            />
          </animated.div>
          <animated.div
            style={textAnimation}
            class="w-2/5 flex flex-col self-center"
          >
            <h3 class="font-semibold text-[30px] mb-9">Project name</h3>
            <p class="w-2/3 font-normal ">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.Most
              calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div class="flex mt-10 gap-10">
              <button class="py-3 px-4 border bg-violet-500 text-white font-medium">
                Live Demo
              </button>
              <button class="py-3 px-7 border border-black font-medium">
                GitHub
              </button>
            </div>
          </animated.div>
        </div>

        <div class="flex justify-around align-middle mt-[100px]">
          <animated.div
            style={imageAnimation}
            class="w-3/5 flex justify-center self-center"
          >
            <img
              src="images/img5.png"
              alt="image"
              class=" w-2/3 h-[450px] self-center"
            />
          </animated.div>
          <animated.div
            style={textAnimation}
            class="w-2/5 flex flex-col self-center"
          >
            <h3 class="font-semibold text-[30px] mb-9">Project name</h3>
            <p class="w-2/3 font-normal ">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.Most
              calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div class="flex mt-10 gap-10">
              <button class="py-3 px-4 border bg-violet-500 text-white font-medium">
                Live Demo
              </button>
              <button class="py-3 px-7 border border-black font-medium">
                GitHub
              </button>
            </div>
          </animated.div>
        </div>

        <div class="flex justify-around align-middle mt-[100px]">
          <animated.div
            style={imageAnimation}
            class="w-3/5 flex justify-center self-center"
          >
            <img
              src="images/img5.png"
              alt="image"
              class=" w-2/3 h-[450px] self-center"
            />
          </animated.div>
          <animated.div
            style={textAnimation}
            class="w-2/5 flex flex-col self-center"
          >
            <h3 class="font-semibold text-[30px] mb-9">Project name</h3>
            <p class="w-2/3 font-normal ">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.Most
              calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div class="flex mt-10 gap-10">
              <button class="py-3 px-4 border bg-violet-500 text-white font-medium">
                Live Demo
              </button>
              <button class="py-3 px-7 border border-black font-medium">
                GitHub
              </button>
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
}

export default Projects;
