import { twMerge } from "tailwind-merge";

const SectionName = ({ children, className }) => {
  return (
    <div className={twMerge("flex gap-4 items-center pb-6", className)}>
      <div className="w-8 h-px bg-primary-1" />
      <p className="font-semibold text-3.5 leading-[143%] tracking-widest uppercase text-primary-1">
        {children}
      </p>
    </div>
  );
};

export default SectionName;
