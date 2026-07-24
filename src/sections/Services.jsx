import SectionName from "../components/ui/SectionName";
import SectionTitle from "../components/ui/SectionTitle";
import serviceIcon1 from "../assets/icons/serviceIcon1.svg";
import serviceIcon2 from "../assets/icons/serviceIcon2.svg";
import serviceIcon3 from "../assets/icons/serviceIcon3.svg";

const serviceData = [
  {
    icon: serviceIcon1,
    title: "Architectural & Interior design",
    description:
      "Custom spaces that balance function and style, tailored to your lifestyle.",
  },
  {
    icon: serviceIcon2,
    title: "Building Renovation",
    description:
      "Transforming old spaces into modern, stylish, and functional environments.",
  },
  {
    icon: serviceIcon3,
    title: "Construciton Management",
    description:
      "Seamless planning and execution to deliver projects on time and budget.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="mt-17 max-w-200">
        <SectionName>OUR SERVICES</SectionName>
        <SectionTitle className="pb-6">
          We provide the <span className="italic">best solutions</span> for your
          dream home
        </SectionTitle>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center pt-12 md:pt-20">
        {serviceData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between border border-primary-3 py-8 px-8 md:w-96 md:h-96"
          >
            <img src={item.icon} alt="icon" className="w-12 h-12" />
            <div className="">
              <h3 className="font-second text-[36px]/[133%] text-neutral-1 pb-4">{item.title}</h3>
              <p className="text-[18px]/[178%] text-neutral-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
