import { CheckIcon } from "lucide-react";
import React from "react";

const benefits = [
  "Accessible learning from anywhere.",
  "Better collaboration between students and teachers.",
  "Personalized education experiences.",
  "Data-driven improvements in student performance.",
];

export const BenefitsSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[681px]">
      <div className="flex w-full max-w-[1440px] items-center gap-[60px] pl-0 pr-[135px] py-0 absolute top-[100px] left-0">
        <div className="rounded-[0px_8px_8px_0px] bg-[linear-gradient(0deg,rgba(27,91,114,0.2)_0%,rgba(27,91,114,0.2)_100%),url(../frame-1000005424.png)_50%_50%_/_cover] bg-cover bg-center w-[680px] h-[481px]" />

        <div className="self-stretch w-0.5 rounded-[25px] bg-[linear-gradient(261deg,rgba(251,8,4,1)_11%,rgba(0,218,255,1)_100%)]" />

        <div className="flex flex-col items-start gap-[30px] flex-1">
          <div className="flex flex-col items-start gap-3.5 w-full">
            <h2 className="w-full [font-family:'Montserrat',Helvetica] font-bold text-primary-500 text-5xl tracking-[0] leading-[normal]">
              The Benefits We Deliver
            </h2>

            <p className="w-full [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-500 text-lg tracking-[0] leading-[normal]">
              Enable smarter learning, better engagement, and improved student
              outcomes.
            </p>
          </div>

          <ul className="flex flex-col items-start gap-[18px] w-full">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 w-full [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutralgray-700 text-xl tracking-[0] leading-[normal]"
              >
                <CheckIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <img
        className="absolute top-0 -right-5 w-[626px] h-[241px]"
        alt="Frame"
        src="/frame-1000005315-1.svg"
      />
    </section>
  );
};
