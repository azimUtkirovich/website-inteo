import { twMerge } from "tailwind-merge";

const WorkBox = ({ image, title, content,className }) => {
  return (
    <div className={twMerge(className)}>
      {image && <img src={image} alt={title} />}
      {title && <h3 className="font-second text-[36px]/[133%] text-neutral-1 py-4">{title}</h3>}
      {title && <p className="text-[18px]/[178%] text-neutral-2">{content}</p>}
    </div>
  );
};

export default WorkBox;
