import React from "react";
import { Button } from "../../../../components/ui/button";

const navItems = [
  { label: "Home", active: false },
  { label: "Services", active: false },
  { label: "Industries", active: true },
  { label: "Portfolio", active: false },
  { label: "Career", active: false },
  { label: "Blog", active: false },
];

export const NavbarSection = (): JSX.Element => {
  return (
    <nav className="flex h-[94px] items-center gap-[30px] px-[135px] py-5 w-full bg-white shadow-[0px_4px_14px_#0000000a]">
      <img
        className="w-[98px] h-[54px] object-cover"
        alt="Image"
        src="/image-36-1.png"
      />

      <div className="flex items-start justify-center gap-[30px] flex-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="inline-flex flex-col items-start justify-center gap-px"
          >
            <span
              className={`flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap ${
                item.active ? "text-[#39b2df]" : "text-neutralgray-700"
              }`}
            >
              {item.label}
            </span>
            {item.active && (
              <div className="w-full h-[1.5px] rounded-[9px] bg-[linear-gradient(153deg,rgba(0,218,255,1)_53%,rgba(251,8,4,1)_100%)]" />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-0 w-[230.15px] h-[54px]">
        <img className="w-[43px] h-10" alt="Group" src="/group-6356304.png" />

        <Button
          variant="ghost"
          className="h-[54px] px-2 py-3.5 rounded-[50px] hover:bg-transparent"
        >
          <span className="[font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Free Consultation
          </span>
        </Button>

        <img className="w-[43px] h-10" alt="Group" src="/group-6356305.png" />
      </div>
    </nav>
  );
};
