import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Academics = () => {
  const [showProj, setShowProj] = useState(false);
  const [showCerts, setShowCerts] = useState(false);

  return (
    <section className="academics md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="md:px-4 md:py-6 px-2 py-3 flex flex-col items-center justify-center gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
        <div className="py-10">
          <h2 className="text-4xl font-bold 2xl:text-5xl">Academics</h2>
        </div>

        <div className="boxes w-full rounded-md">
          <div
            onClick={() => setShowProj(!showProj)}
            className="AcademicsProjects bg-white border-b-[1px] rounded-t cursor-pointer px-4"
          >
            <div className="text-black flex items-center justify-between p-2">
              <span className="2xl:text-xl">Academic Projects</span>
              <span className={`showIcon ${showProj ? "rotate-180" : ""}`}>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
          </div>

          {showProj ? (
            <div className="showProj flex justify-center py-8 w-full border-[1px]">
              <div className="bg-[#27292A] p-3 flex items-center justify-center gap-8">
                <div>
                  <img src="" alt="project img 1" />
                </div>
                <div>
                  <span className="2xl:text-xl">To be updated soon</span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="SecurityCertificates bg-white border-b-[1px] px-4">
            <div
              onClick={() => setShowCerts(!showCerts)}
              className="text-black flex items-center justify-between p-2 cursor-pointer"
            >
              <span className="2xl:text-xl">Security Certificates</span>
              <span className={`showIcon ${showCerts ? "rotate-180" : ""}`}>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
          </div>

          {showCerts ? (
            <div className="showCert flex justify-center py-8 w-full border-[1px]">
              <div className="bg-[#27292A] p-3 flex items-center justify-center gap-8">
                <div>
                  <img src="" alt="certificate img 1" />
                </div>
                <div>
                  <span className="2xl:text-xl">To be updated soon</span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Academics;
