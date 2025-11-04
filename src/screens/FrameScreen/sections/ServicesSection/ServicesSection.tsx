import React from "react";
import { Button } from "../../../../components/ui/button";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-[60px]">
      <div className="flex flex-col items-center gap-[60px] max-w-[838px] mx-auto px-4">
        <div className="flex flex-col items-start gap-[18px] w-full">
          <h2 className="w-full [font-family:'Montserrat',Helvetica] font-normal text-[#39b2df] text-5xl text-center tracking-[-0.24px] leading-[56px]">
            <span className="font-bold tracking-[-0.12px]">
              Let&apos;s Build the Future of{" "}
            </span>
            <span className="tracking-[-0.12px]">Your Industry Together</span>
          </h2>
        </div>

        <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-neutralwhite rounded-[50px] border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[50px] before:[background:linear-gradient(114deg,rgba(0,218,255,1)_0%,rgba(251,8,4,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-neutralwhite">
          <span className="relative flex items-center justify-center w-fit [font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Get Free Consultation
          </span>
        </Button>
      </div>

      <img
        className="absolute bottom-0 left-0 w-[343px] h-[198px]"
        alt="Frame"
        src="/frame-1000005314-2.svg"
      />
    </section>
  );
};
