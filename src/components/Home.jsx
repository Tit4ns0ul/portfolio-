import Layout from "./Layout";
import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import MySkills from "./MySkills";
import Academics from "./Academics";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutMe />
        <MySkills />
        <Academics />
        <Contacts />
      </Layout>
    </>
  );
};

export default Home;
