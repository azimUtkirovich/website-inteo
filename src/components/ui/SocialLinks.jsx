import social_instagramm from "../../assets/icons/social_instagramm.svg";
import social_facebook from "../../assets/icons/social_facebook.svg";
import social_youtube from "../../assets/icons/social_youtube.svg";
import social_x from "../../assets/icons/social_x.svg";

const socialData = [
  {
    id: 1,
    icon: social_instagramm,
    title: "instagramm",
    url: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: social_facebook,
    title: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: social_youtube,
    title: "youtube",
    url: "https://www.youtube.com/",
  },
  {
    id: 4,
    icon: social_x,
    title: "x",
    url: "https://www.x.com/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      {socialData.map((item) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-primary-3 flex items-center justify-center rounded-full"
        >
          <img src={item.icon} alt={item.title} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
