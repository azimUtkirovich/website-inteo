import { twMerge } from "tailwind-merge";

const SectionDescription = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "text-[18px]/[178%] text-neutral-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionDescription;