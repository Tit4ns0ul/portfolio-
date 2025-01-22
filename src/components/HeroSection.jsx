import mainImg from "../assets/ksb img.png";

const HeroSection = () => {
  return (
    <section className="home md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="md:px-4 md:py-6 px-2 py-3 flex items-center md:justify-between justify-center gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
        <div className="textPart">
          <div className="text">
            <h2 className="md:text-4xl text-2xl font-bold 2xl:text-6xl">
              {"Hey👋, I'm Kamal"}
            </h2>
            <h3 className="md:text-lg text-md font-bold 2xl:text-2xl">
              Penetration Tester || Security Researcher
            </h3>
            <p className="md:text-lg md:py-8 text-md py-4 text-[#5f5f5f] 2xl:text-2xl">
              Human stupidity is the biggest vulnerability <br /> that hackers
              always target.
            </p>
          </div>

          <div className="buttons flex items-center gap-4">
            <a
              target="_blank"
              href="https://tryhackme.com/p/tit4ns0ul"
              className="bg-[#444444] md:py-3 md:px-8 py-2 px-4 rounded-full font-medium text-sm duration-300 text-[#7a7a7a] hover:text-[#FDC563] 2xl:text-lg"
            >
              TryHackMe
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tit4ns0ul"
              className="bg-[#444444] md:py-3 md:px-8 py-2 px-4 rounded-full font-medium text-sm duration-300 text-[#7a7a7a] hover:text-[#FDC563] 2xl:text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="imgPart">
          <div className="bg-[#939AFF] lg:w-96 lg:h-96 md:w-88 md:h-88 w-56 h-56 rounded-full overflow-hidden border-2 border-black 2xl:w-[480px] 2xl:h-[480px]">
            <a
              className="w-full h-full"
              target="_blank"
              href="https://www.instagram.com/tit4ns0ul/"
            >
              <img className="w-full h-full" src={mainImg} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
