import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat sollicitudin odio nec tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec quam eget sem hendrerit cursus.",
    name: "Leslie Alexander",
    title: "Business Owner",
    avatar: "/ellipse-6-2.png",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat sollicitudin odio nec tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec quam eget sem hendrerit cursus.",
    name: "Leslie Alexander",
    title: "Business Owner",
    avatar: "/ellipse-6-2.png",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat sollicitudin odio nec tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec quam eget sem hendrerit cursus.",
    name: "Leslie Alexander",
    title: "Business Owner",
    avatar: "/ellipse-6-2.png",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-primary-50 py-[100px] overflow-hidden">
      <div className="container mx-auto px-4">
        <header className="flex flex-col items-center gap-3.5 mb-[83px] max-w-[868px] mx-auto">
          <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-primary-500 text-5xl text-center tracking-[0] leading-[normal]">
            <span className="font-bold">Trusted by </span>
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#39b2df] text-5xl tracking-[0]">
              Our Clients
            </span>
          </h2>
          <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-500 text-lg text-center tracking-[0] leading-[normal]">
            We take pride in building lasting partnerships. Explore testimonials
            from clients who experienced our commitment to quality and
            innovation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[60px] max-w-[1680px] mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white rounded-lg shadow-[0px_4px_8px_#0000001a] border-0"
            >
              <CardContent className="p-[30px] flex flex-col h-[310px]">
                <div className="flex flex-col gap-3.5 flex-1">
                  <img
                    className="w-12 h-12"
                    alt="Quote icon"
                    src="/frame.svg"
                  />
                  <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-[normal]">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 mt-auto relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                  </Avatar>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[#39b2df] text-lg tracking-[0] leading-[normal]">
                      {testimonial.name}
                    </div>
                    <div className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#6d6d6d] text-base tracking-[0] leading-[normal]">
                      {testimonial.title}
                    </div>
                  </div>
                  <img
                    className="absolute bottom-0 right-0 w-28 h-[69px]"
                    alt="Decorative frame"
                    src="/frame-1000005354.svg"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-[300px] h-1 mx-auto bg-neutralgray-100 rounded-[50px] flex">
          <div className="w-[120px] h-1 rounded-[50px_0px_0px_50px] bg-[linear-gradient(153deg,rgba(0,218,255,1)_53%,rgba(251,8,4,1)_100%)]" />
        </div>
      </div>
    </section>
  );
};
