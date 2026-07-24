import SocialLinks from "../ui/SocialLinks";

const Footer = () => {
  return (
    <section id="footer" className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <div>
        <p className="text-[18px]/[178%] text-neutral-2">
          © 2025 Inteo. Template by{" "}
          <span className="text-primary-1">Framerize</span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-semibold">Connect</p>
        <div className="w-16 h-px bg-neutral-3 ml-4 mr-8" />
        <div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Footer;
