import React from "react";

const benefits = [
  "Expertise in scalable EdTech solutions.",
  "Intuitive UI/UX for learners and educators.",
  "Secure systems with data privacy compliance.",
  "Experience across schools, colleges, and online academies.",
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex items-center gap-[60px] pl-[135px] pr-0 py-[100px]">
        <div className="flex flex-col items-start gap-[30px] flex-1">
          <div className="flex flex-col items-start gap-3.5 w-full">
            <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-primary-500 text-5xl tracking-[0] leading-[normal]">
              <span className="font-bold">Why</span>
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#39b2df] text-5xl tracking-[0]">
                {" "}
                Choose Us
              </span>
            </h2>

            <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-500 text-lg tracking-[0] leading-[normal]">
              Trusted EdTech expertise with a strong focus on learners,
              teachers, and institutions.
            </p>
          </div>

          <ul className="flex flex-col items-start gap-[18px] w-full">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-neutralgray-700 text-xl tracking-[0] leading-[normal]"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-0.5 h-[481px] rounded-[25px] bg-[linear-gradient(261deg,rgba(251,8,4,1)_11%,rgba(0,218,255,1)_100%)]" />

        <div className="rounded-[8px_0px_0px_8px] bg-[url(/frame-1000005424-1.png)] bg-cover bg-[50%_50%] w-[680px] h-[481px]" />
      </div>

      <img
        className="absolute top-0 left-0 w-[626px] h-[257px]"
        alt="Frame"
        src="/frame-1000005315.svg"
      />
    </section>
  );
};
