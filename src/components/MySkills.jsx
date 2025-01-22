import problemSolvingImg from "../assets/skills/coding.png";
import mindsetImg from "../assets/skills/mindset.png";
import uiImg from "../assets/skills/ui-design.png";
import chatImg from "../assets/skills/chatting-app.png";
import aiImg from "../assets/skills/artificial-intelligence.png";
import skillImg from "../assets/skills/skill.png";
import uxImg from "../assets/skills/ux.png";
import researchImg from "../assets/skills/research (1).png";

const MySkills = () => {
  const skills = [
    {
      id: 1,
      skillIcon: problemSolvingImg,
      skillName: "Problem Solving",
      skillDescription:
        "As a passionate problem solver with in-depth knowledge of data structures and algorithms, I'm always seeking opportunities to apply my skills to real-world challenges.",
    },
    {
      id: 2,
      skillIcon: mindsetImg,
      skillName: "Critical & Analytical Thinking",
      skillDescription:
        "My critical and analytical skills are sharp, enabling me to dissect complex issues and extract valuable insights.",
    },
    {
      id: 3,
      skillIcon: uiImg,
      skillName: "Web Security",
      skillDescription:
        "Proficient in web security practices, with strong expertise in developing secure websites.",
    },
    {
      id: 4,
      skillIcon: chatImg,
      skillName: "Thread Hunting",
      skillDescription:
        "Threat hunting is a proactive cybersecurity approach aimed at identifying and mitigating potential threats before they cause harm.",
    },
    {
      id: 5,
      skillIcon: aiImg,
      skillName: "Artificial Intelligence",
      skillDescription:
        "My knowledge extends to advanced techniques like neural networks and deep learning architectures, showcasing my ability to leverage complex algorithms for solving intricate problems.",
    },
    {
      id: 6,
      skillIcon: skillImg,
      skillName: "Innovative",
      skillDescription:
        "With my keen sense of creativity and ability to think outside the box, I bring fresh perspectives and unique ideas to any project, fostering a culture of innovation and driving meaningful progress",
    },
    {
      id: 7,
      skillIcon: uxImg,
      skillName: "UI/UX Designer",
      skillDescription:
        "I possess an understanding of design principles, color schemes, & typography. I create seamless user experiences with a user-centric approach, enhancing the usability and engagement.",
    },
    {
      id: 8,
      skillIcon: researchImg,
      skillName: "Security Researcher",
      skillDescription:
        "I am an active Security Researcher, consistently contributing to the field with my ongoing research work",
    },
  ];
  return (
    <section className="md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="md:px-4 md:py-6 px-2 py-3 flex flex-col items-center justify-center gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
        <div className="py-10">
          <h2 className="text-4xl font-bold 2xl:text-5xl">My Skills</h2>
        </div>

        <div className="skillBoxes">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {skills.map(({ id, skillName, skillIcon, skillDescription }) => (
              <div
                key={id}
                className="group relative border-[1px] p-4 flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#1F1F1F] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 2xl:w-20 2xl:h-20">
                  <img
                    src={skillIcon}
                    alt={`${skillName} icon`}
                    className="w-full h-full"
                  />
                </div>

                <div className="skillHeading mt-2 text-center">
                  <h2 className="text-[#FDC563] text-lg font-semibold transition-transform duration-300 group-hover:-translate-y-1 2xl:text-2xl">
                    {skillName}
                  </h2>
                </div>

                <div className="skillDescription mt-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm text-center font-sans font-thin text-[#7a7a7a] 2xl:text-xl">
                    {skillDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
