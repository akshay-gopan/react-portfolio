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
      <div class="flex flex-col justify-center items-center pt-24 mt-4 bg-[#fafafa] px-4">
        <div class="w-full max-w-4xl text-center">
          <h2 class="text-4xl md:text-5xl font-medium">PROJECTS</h2>
          <p class="mt-5 text-lg md:text-xl font-normal leading-6">
            Take a look at my projects to see how I apply my skills in web
            development and Python. Each one reflects my learning journey and
            passion for technology.
          </p>
        </div>

        {[
          {
            title: "Finance Tracker",
            description:
              "A MERN stack application for tracking and managing personal finances. It includes features like expense tracking, financial reporting, category-wise sorting and user authentication, all within a secure and user-friendly interface.",
            imgSrc: "images/finance-tracker.jpg",
            demoLink: "#",
            githubLink: "https://github.com/akshay-gopan/mern-expense-tracker",
          },
          {
            title: "Networkk",
            description:
              "A MERN stack application connecting clients with local skilled laborers. Features include user profiles, job postings, advanced search, real-time notifications, and an admin dashboard for seamless job matching and management.",
            imgSrc: "images/networkk.jpg",
            demoLink: "#",
            githubLink: "https://github.com/Aaron-Thomas-Blessen/NETWORKK",
          },
          {
            title: "PDF Buddy",
            description:
              "A Python app using Streamlit and the Gemini API for interactive PDF document analysis and chat. Users can upload PDFs, and the app provides real-time responses and insights based on the document's content.",
            imgSrc: "images/chatbot.jpg",
            demoLink: "#",
            githubLink: "https://github.com/akshay-gopan/pdf-chat-streamlit",
          },
          {
            title: "E-Commerce Platform",
            description:
              "A robust application built with the MERN stack for seamless online shopping. Features include product listings, shopping cart functionality, user authentication, order management, and secure payment integration.",
            imgSrc: "images/e-commerce.jpg",
            demoLink: "#",
            githubLink: "https://github.com/akshay-gopan/e-commerce-site",
          },
          {
            title: "Weather App",
            description:
              "A React-based application utilizing the OpenStreetMap API to provide real-time weather updates. Features include location-based weather forecasts with a user-friendly interface for easy navigation.",
            imgSrc: "images/weather.jpg",
            demoLink: "#",
            githubLink:
              "https://github.com/akshay-gopan/weather-app-internship",
          },

        ].map((project, index) => (
          <div
            key={index}
            class="flex flex-col md:flex-row justify-center items-center my-10 gap-10 w-full"
          >
            <animated.div
              style={imageAnimation}
              class="w-full md:w-3/5 flex justify-center"
            >
              <img
                src={project.imgSrc}
                alt="Project Image"
                class="w-full md:w-2/3 h-auto max-h-[450px]"
              />
            </animated.div>
            <animated.div
              style={textAnimation}
              class="w-full md:w-2/5 flex flex-col items-center md:items-start"
            >
              <h3 class="font-semibold text-2xl md:text-4xl mb-5">
                {project.title}
              </h3>
              <p class="w-full md:w-3/4 text-lg font-normal mb-5">
                {project.description}
              </p>
              <div class="flex gap-4 mt-5">
                <a href={project.demoLink}>
                  <button class="py-2 px-4 border bg-violet-500 text-white font-medium rounded-sm">
                    Live Demo
                  </button>
                </a>
                <a href={project.githubLink}>
                  <button class="py-2 px-6 border border-black font-medium rounded-sm">
                    GitHub
                  </button>
                </a>
              </div>
            </animated.div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
