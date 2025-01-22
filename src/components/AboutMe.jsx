import { Link } from "react-scroll";
import aboutImg from "../assets/kamal.png";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="about md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="md:px-4 md:py-6 px-2 py-3 flex items-center justify-center lg:justify-between gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
        <div className="textPart">
          <div className="text">
            <h2 className="md:text-4xl text-2xl font-extralight 2xl:text-5xl">
              About me
            </h2>
            <h3 className="md:text-lg text-md font-bold 2xl:text-2xl">
              CSE Undergrad || Penetration Tester || Security Researcher
            </h3>
            <p className="md:text-md md:py-8 text-md py-4 text-[#5f5f5f] md:max-w-[30rem] lg:max-w-[36rem]  2xl:text-2xl 2xl:max-w-[54rem]">
              {` Hi there👋, I'm Kamal Singh Bisht , an undergraduate student at
              Graphic Era Hill University, majoring in computer science. As a
              passionate Computer Science student with a deep love for
              programming and technology. Smart Cyber security and ethical
              hacking are my areas of expertise and fascination. My goal is to
              contribute to a safer digital world by identifying vulnerabilities
              and building strong defenses with the help Artificial intelligence
              . With an unwavering curiosity, I'm constantly seeking new
              challenges and opportunities to dive into the world of cyber
              security and ethical hacking.`}
            </p>
          </div>

          <div className="buttons flex items-center gap-4">
            <NavLink
              to={"/resume"}
              className="bg-[#444444] md:py-3 md:px-8 py-2 px-4 rounded-full font-medium text-sm duration-300 text-[#7a7a7a] hover:text-[#FDC563] 2xl:text-xl"
            >
              Resume
            </NavLink>
            <Link
              to="academics"
              smooth
              duration={500}
              className="bg-[#444444] md:py-3 md:px-8 py-2 px-4 rounded-full font-medium text-sm duration-300 text-[#7a7a7a] hover:text-[#FDC563] 2xl:text-xl"
            >
              Certifications
            </Link>
          </div>
        </div>

        <div className="imgPart">
          <div className="bg-[#939AFF] lg:w-96 lg:h-96 md:w-88 md:h-88 w-56 h-56 rounded-full overflow-hidden border-2 border-black 2xl:w-[480px] 2xl:h-[480px]">
            <a
              className="w-full h-full"
              target="_blank"
              href="https://www.linkedin.com/in/tit4ns0ul/"
            >
              <img className="w-full h-full" src={aboutImg} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
