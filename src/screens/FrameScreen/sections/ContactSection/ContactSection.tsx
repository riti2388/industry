import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const offerings = [
  "E-Learning Platforms & Portals",
  "Learning Management Systems (LMS)",
  "Mobile Apps for Students & Teachers",
  "Virtual Classroom & Live Video Integration",
  "Gamification & Interactive Learning Tools",
  "Student Performance Analytics Dashboards",
  "Online Exam & Assessment Solutions",
  "AI-based Personalized Learning Systems",
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[100px]">
      <div className="container mx-auto px-[135px]">
        <div className="flex items-center gap-[60px]">
          <div className="flex flex-col items-start gap-[30px] flex-1">
            <div className="flex flex-col items-start gap-3.5 w-full">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-primary-500 text-5xl tracking-[0] leading-[normal]">
                <span className="font-bold">Our </span>
                <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#39b2df] text-5xl tracking-[0]">
                  Education Services
                </span>
              </h2>

              <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-500 text-lg tracking-[0] leading-[normal]">
                Tools for e-learning, mobile learning, and performance-driven
                education.
              </p>
            </div>

            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-neutralwhite rounded-[50px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[50px] before:[background:linear-gradient(114deg,rgba(0,218,255,1)_0%,rgba(251,8,4,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <span className="[font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
                Free Consultation
              </span>
            </Button>
          </div>

          <div className="w-0.5 h-full rounded-[25px] bg-[linear-gradient(261deg,rgba(251,8,4,1)_11%,rgba(0,218,255,1)_100%)]" />

          <Card className="w-[680px] rounded-[8px_0px_0px_8px] overflow-hidden bg-[linear-gradient(90deg,rgba(27,91,114,1)_0%,rgba(57,178,223,1)_100%)] border-none">
            <CardContent className="p-10">
              <div className="flex flex-col items-start gap-[30px]">
                <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralwhite text-2xl tracking-[0] leading-[normal]">
                  Our Offering
                </h3>

                <div className="flex flex-col items-start gap-[18px] w-full">
                  {offerings.map((offering, index) => (
                    <p
                      key={index}
                      className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-neutralwhite text-xl tracking-[0] leading-[normal]"
                    >
                      {offering}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
