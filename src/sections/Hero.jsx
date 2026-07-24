import heroBg from "../assets/hero.jpg";
import award1 from "../assets/icons/award1.png";
import award2 from "../assets/icons/award2.png";
import award3 from "../assets/icons/award3.png";
import award4 from "../assets/icons/award4.png";

const awards = [
  {
    img: award1,
    title: "German Design Award",
    year: "2025",
  },
  {
    img: award2,
    title: "Gold A’ Design Award",
    year: "2024",
  },
  {
    img: award3,
    title: "IF Design Award",
    year: "2023",
  },
  {
    img: award4,
    title: "Good Design Award",
    year: "2022",
  },
];

const Hero = () => {
  return (
    <div id="/" className="pb-12 md:pb-29">
      <p className="max-w-180 mx-auto pt-10 md:pt-32 pb-6 font-normal text-[14px] md:text-[20px] leading-[160%] text-center text-neutral-2">
        We design spaces that unite function and beauty, creating interiors and
        architecture that bring your lifestyle and vision to life.
      </p>
      <h1 className="pb-4 md:pb-20 font-second font-medium text-[48px] md:text-[72px] leading-[133%] tracking-[-0.02em] text-center text-neutral-1">
        Where <span className="italic">design</span> meets emotion
      </h1>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
      />
      <div className="flex-col md:flex-row bg-neutral-1 py-6 flex justify-center items-center">
        <p className="font-second italic font-normal text-6 leading-[133%] text-center text-white rotate-0 md:rotate-270 opacity-[0.5]">
          Awards
        </p>
        <span className="w-16 h-px bg-white opacity-[0.5] mx-5 my-5" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 flex-wrap gap-16 justify-center items-center">
          {awards.map((item) => (
            <div className="flex gap-3 justify-start items-center">
              <img src={item.img} alt="" />
              <div className="text-3.5 leading-[171%] text-neutral-4">
                <p>{item.title}</p>
                <p>{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
