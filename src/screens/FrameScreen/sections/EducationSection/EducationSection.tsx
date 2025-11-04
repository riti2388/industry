import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const EducationSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[580px]">
        <div
          className="absolute inset-0 w-full h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(../frame-1000005420.png)" }}
        />

        <div className="absolute top-[135px] left-1/2 -translate-x-1/2 w-full max-w-[1170px] px-4">
          <Card className="bg-[#0b242d99] backdrop-blur-[10px] border-0 shadow-none">
            <CardContent className="flex flex-col items-center gap-3.5 px-[135px] py-20">
              <div className="[font-family:'Nunito_Sans',Helvetica] font-normal text-primary-500 text-2xl text-center leading-normal underline">
                Industries
              </div>

              <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralwhite text-5xl text-center tracking-[0] leading-normal">
                Education
              </h2>

              <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralwhite text-2xl text-center tracking-[0] leading-normal">
                Education is rapidly moving digital, and we provide tools that
                enhance learning, improve collaboration, and make education
                accessible anywhere, anytime. From virtual classrooms to
                analytics, we support institutions in delivering impactful
                education.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
