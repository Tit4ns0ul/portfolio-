import Layout from "./Layout";

const Resume = () => {
  const Skill = ({ name, level }) => {
    return (
      <div>
        <div className="flex gap-4">
          <span>{name}</span> <span>{`${level}%`}</span>
        </div>
        <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="bg-[#FFC562] h-4"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <section className="md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
        <div className="md:px-4 md:py-6 px-2 py-3 flex flex-col gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
          <div className="py-4">
            <div className="text-white min-h-screen p-6">
              <div className="max-w-4xl">
                <div className="flex items-center gap-6 flex-wrap-reverse">
                  <h1 className="text-4xl font-bold border-b-4 inline-block border-[#FFC562] pb-2 2xl:text-5xl">
                    Resume
                  </h1>
                  <a
                    type="application/pdf"
                    className="px-4 py-2 border-2 text-white bg-[#1F1F1F] hover:bg-[#0f0f0f] duration-300 2xl:text-xl"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View/Download
                  </a>
                </div>

                <section className="mt-12">
                  <h2 className="text-3xl font-semibold 2xl:text-4xl">Education</h2>
                  <div className="mt-6 space-y-8">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-[#FFC562] rounded-full"></div>
                      <h3 className="text-xl font-bold 2xl:text-2xl">
                        Offensive Security (OffSec)
                      </h3>
                      <p className="font-sans font-extralight text-[#FFC562] 2xl:text-xl">
                        Grad. 2025
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">
                        Offensive Security Certified Professional (OSCP)
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-[#FFC562] rounded-full"></div>
                      <h3 className="text-xl font-bold 2xl:text-2xl">
                        EC-Council University
                      </h3>
                      <p className="font-sans font-extralight text-[#FFC562] 2xl:text-xl">
                        Grad. 2025
                      </p>
                      <ul className="list-disc list-inside">
                        <li className="font-sans font-extralight 2xl:text-xl">
                          Certified Penetration Testing (CPENT)
                        </li>
                        <li className="font-sans font-extralight 2xl:text-xl">
                          Web Application Hacking and Security (WAHS)
                        </li>
                        <li className="font-sans font-extralight 2xl:text-xl">
                          Computer Hacking Forensic Investigator (CHFI)
                        </li>
                        <li className="font-sans font-extralight 2xl:text-xl">
                          Certified Ethical Hacker (CEH)
                        </li>
                      </ul>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-[#FFC562] rounded-full"></div>
                      <h3 className="text-xl font-bold 2xl:text-2xl">
                        Graphic Era Hill University
                      </h3>
                      <p className="font-sans font-extralight text-[#FFC562] 2xl:text-xl">
                        Grad. 2025
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">
                        Bachelor of Computer Application
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">CGPA - 7.20</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-[#FFC562] rounded-full"></div>
                      <h3 className="text-xl font-bold 2xl:text-2xl">
                        Campus School Pantnagar
                      </h3>
                      <p className="font-sans font-extralight text-[#FFC562] 2xl:text-xl">
                        Grad. 2022
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">
                        10+2 with Commerce
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">
                        Percentage - 70%
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mt-12">
                  <h2 className="text-3xl font-semibold">Achievements</h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold 2xl:text-2xl">AIR 1629</h3>
                      <p className="font-sans font-extralight text-[#FFC562] 2xl:text-xl">
                        2024
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">
                        I am in the top 1% on TryHackMe, having solved over 300
                        rooms
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold 2xl:text-2xl">Hall of Fame</h3>
                      <p className="font-sans font-extralight text-[#FFC562] 2xl:text-xl">
                        2024
                      </p>
                      <p className="font-sans font-extralight 2xl:text-xl">Nothing.</p>
                    </div>
                  </div>
                </section>

                <section className="mt-12">
                  <h2 className="text-3xl font-semibold">My Skills</h2>
                  <div className="mt-6 space-y-4 text-xl">
                    <Skill
                      name="Vulnerability Assessment and Penetration Testing (VAPT)"
                      level="95"
                    />
                    <Skill name="Web Security" level="92" />
                    <Skill name="API Security" level="89" />
                    <Skill name="Thread Hunting" level="75" />
                    <Skill name="Artificial Intelligence (AI)" level="70" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
