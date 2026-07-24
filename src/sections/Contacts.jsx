const contactData = [
  {
    title: "Email us at",
    content: "hello@landify.design",
  },
  {
    title: "If you're hurry, quick call for us",
    content: "+8(663)125-08-59",
  },
];

const Contacts = () => {
  return (
    <section id="contact" className="border-y border-neutral-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 max-w-148">
          <h2 className="font-second text-[48px]/[117%] text-neutral-1">
            Kick-start your dream home with us
          </h2>
          <p className="font-second italic text-[48px]/[117%] text-primary-1 pt-4">
            Send us a hi
          </p>
        </div>
        <div className="w-70 flex flex-col gap-8">
          <div>
            <h4 className="font-second text-[24px]/[133%] text-neutral-1 pb-2">
              Brooklyn, New York
            </h4>
            <p className="text-[14px]/[171%] text-neutral-2">
              962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
              State.
            </p>
          </div>
          {contactData.map((item) => (
            <div key={item.title}>
              <h4 className="text-[14px]/[171%] text-neutral-1">{item.title}</h4>
              <p className="text-[24px]/[133%] text-primary-1">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
