import SectionDescription from "../components/ui/SectionDescription";
import SectionName from "../components/ui/SectionName";
import SectionTitle from "../components/ui/SectionTitle";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import badge from "../assets/badge.png";

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="mt-17">
        <SectionName>About us</SectionName>
        <SectionTitle className="pb-6">
          We help to bring your <span className="italic">dream home</span> to
          reality
        </SectionTitle>
        <SectionDescription>
          At Inteo, we create inspiring spaces that blend timeless design with
          modern innovation. <br /> <br /> From homes to commercial projects,
          our team delivers bespoke architecture, interiors, and renovations
          with precision. We value collaboration, quality and sustainability,
          ensuring every project reflects individuality and excellence.
        </SectionDescription>
      </div>
      <div className="flex gap-4 w-full h-120 relative">
        <div style={{ backgroundImage: `url(${badge})` }} className="absolute top-9 right-26 md:-top-15 md:right-53 w-30 h-30 bg-contain bg-center bg-no-repeat" />
        <div style={{ backgroundImage: `url(${about1})` }} className="flex-1 h-120 bg-contain bg-center bg-no-repeat"/>
        <div style={{ backgroundImage: `url(${about2})` }} className="flex-1 h-120 bg-contain bg-center bg-no-repeat mt-20"/>
      </div>
    </section>
  );
};

export default About;
