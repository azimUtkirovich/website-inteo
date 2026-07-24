import WorkBox from "../components/layout/WorkBox";
import Button from "../components/ui/Button";
import SectionName from "../components/ui/SectionName";
import SectionTitle from "../components/ui/SectionTitle";
import workBoxImage1 from "../assets/works1.png";
import workBoxImage2 from "../assets/works2.png";
import workBoxImage3 from "../assets/works3.png";

const Works = () => {
  return (
    <section id="work">
      <div className="mt-17 grid grid-cols-1 md:grid-cols-2 gap-x-20">
        <div className="">
          <SectionName>RECENT WORKS</SectionName>
          <SectionTitle className="pb-6 max-w-146.5">
            Some of <span className="italic">our crafts</span> made with love
          </SectionTitle>
          <div className="py-12 md:py-24">
            <WorkBox
              image={workBoxImage1}
              title="Villa Furnishing & Interior"
              content="A luxury villa project where we combined contemporary furnishings with elegant interiors to create a warm, welcoming, and sophisticated living environment."
            />
          </div>
          <div className="hidden md:block">
            <Button />
          </div>
        </div>
        <div className="flex flex-col gap-20 items-center justify-center">
          <WorkBox
            image={workBoxImage2}
            title="Luxury Hotel Renovation"
            content="A full-scale renovation blending modern luxury with timeless hospitality, transforming guest experiences with refined interiors and premium finishes."
          />
          <WorkBox
            image={workBoxImage3}
            title="Residence Swimming Pool"
            content="An exclusive residential pool design that merges functionality with leisure, featuring stylish landscaping and state-of-the-art construction."
          />
        </div>
        <div className="block md:hidden pt-12">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Works;
