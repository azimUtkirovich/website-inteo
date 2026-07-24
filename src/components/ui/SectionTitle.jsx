import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "font-second text-[60px]/[120%] tracking-[-0.02em] text-neutral-1",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
