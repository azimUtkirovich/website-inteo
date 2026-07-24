const metrics = [
  {
    title: "15+",
    description: "EXPERT PROFESSIONALS",
  },
  {
    title: "50+",
    description: "SUCCESSFUL PROJECTS",
  },
  {
    title: "10+",
    description: "YEARS OF EXPERIENCE",
  },
];

const Metrics = () => {
  return (
    <div className="max-w-300 mx-auto pt-12 md:pt-32 pb-12 grid grid-cols-1 md:grid-cols-3 md:justify-evenly items-center border-b border-neutral-4">
      {metrics.map((item) => (
        <div className="flex gap-4 items-center w-96 justify-center">
          <p className="font-second text-[60px]/[120%] tracking-[-0.02em] text-neutral-1">
            {item.title}
          </p>
          <p className="w-32 font-semibold text-[14px]/[143%] tracking-widest text-neutral-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
