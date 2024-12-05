import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-20 my-20">
      <div className="lg:w-1/2 relative">
        <figure>
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="about us"
            width={1200}
            height={1200}
            className="w-96 h-80"
          />
        </figure>

        <figure className="absolute top-28 -right-4 border-8 border-white">
          <Image
            src="/assets/images/about_us/parts.jpg"
            alt="about us"
            width={1200}
            height={1200}
            className="w-60 h-60"
          />
        </figure>
      </div>

      <div className="w-full lg:w-1/2">
        <span className="text-xl font-semibold text-primary mb-6">
          About Us
        </span>

        <h3 className="text-3xl font-bold text-black mb-5">
          We are qualified & of experience in this field
        </h3>
        <p className="text-base text-[#737373] mb-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
          <br></br> <br></br>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apost look even slightly
          believable.
        </p>

        <button className="hero__btn hover:text-primary hover:border-primary">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
