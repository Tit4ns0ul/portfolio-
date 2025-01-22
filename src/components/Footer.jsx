const Footer = () => {
  return (
    <section className="md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="md:px-4 md:py-6 px-2 py-10 flex flex-col justify-center gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
        <div className="py-4 flex flex-col items-center justify-center ">
          <p className="text-center 2xl:text-2xl">© 2025 Tit4ns0ul. All rights reserved.</p>
          <p className="pt-2">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/tit4ns0ul/"
              className="text-blue-500 hover:text-[#FDC563] 2xl:text-2xl"
            >
              Kamal Singh Bisht
            </a>
          </p>

          <p className="pt-2">
            Developed by{" "}
            <a
              href="https://devabdulrehman.vercel.app/"
              className="text-blue-500 hover:text-[#FDC563] 2xl:text-2xl"
            >
              Abdul Rehman
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
