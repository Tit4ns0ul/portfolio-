import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Contacts = () => {
  const contactList = [
    {
      id: 1,
      name: "Email",
      url: "workwithkamal@outlook.com",
      urlLink: "mailto:workwithkamal@outlook.com",
    },
    {
      id: 2,
      name: "Phone",
      url: "+919457752885",
      urlLink: "tel:+919457752885",
    },
    {
      id: 3,
      name: "Location",
      url: "Haldwani, Uttarakhand",
    },
  ];

  const otherSectionList = [
    {
      id: 1,
      name: "About",
      link: "about",
    },
    {
      id: 2,
      name: "Resume",
      url: "/resume",
    },
    {
      id: 3,
      name: "Projects",
      link: "academics",
    },
    {
      id: 4,
      name: "Certifications",
      link: "academics",
    },
  ];

  return (
    <section className="contact md:px-16 md:py-8 px-4 py-4 my-10 2xl:flex 2xl:items-center 2xl:justify-center">
      <div className="md:px-4 md:py-6 px-2 py-3 flex flex-col justify-center gap-4 flex-wrap bg-[#1F1F1F] 2xl:w-[1700px]">
        <div className="py-10">
          <h2 className="text-4xl font-bold 2xl:text-5xl">Contacts</h2>
        </div>

        <div className="skillBoxes w-full">
          <div className="flex flex-col gap-12">
            {contactList.map(({ id, name, url, urlLink }) => {
              return (
                <React.Fragment key={id}>
                  <div className="px-4">
                    <div className="flex w-full gap-8">
                      <span>{id}.</span>
                      <div className="flex flex-col gap-2">
                        <span className="2xl:text-xl">{name}</span>
                        <span className="2xl:text-xl">
                          <a className="2xl:text-xl" href={urlLink}>
                            {url}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="otherSection py-8">
          <div className="pt-4 pb-8 text-4xl">
            <p className="2xl:text-4xl">Other section</p>
          </div>
          <div className="w-full h-full">
            {otherSectionList.map(({ id, name, link, url }) => {
              return !url ? (
                <Link
                  to={link}
                  smooth
                  duration={500}
                  key={id}
                  className="hover:border-2 border-2 border-[#1F1F1F] inline-flex cursor-pointer items-center justify-center hover:border-blue-900 px-6 gap-4 rounded-full py-2"
                >
                  <span>
                    <span className="text-[#FDC563] font-medium 2xl:text-2xl">
                      {name}
                    </span>
                  </span>
                </Link>
              ) : (
                <NavLink
                  to={url}
                  smooth
                  duration={500}
                  key={id}
                  className="hover:border-2 border-2 border-[#1F1F1F] inline-flex cursor-pointer items-center justify-center hover:border-blue-900 px-6 gap-4 rounded-full py-2"
                >
                  <span>
                    <span className="text-[#FDC563] font-medium 2xl:text-2xl">
                      {name}
                    </span>
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
