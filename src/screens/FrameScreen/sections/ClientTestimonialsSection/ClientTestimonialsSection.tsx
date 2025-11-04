import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-neutralwhite py-[100px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[323px] bg-[linear-gradient(90deg,rgba(27,91,114,1)_31%,rgba(57,178,223,1)_100%)]" />

      <div className="relative max-w-[1170px] mx-auto px-4 flex items-start gap-[100px]">
        <div className="flex flex-col w-[620px] items-start gap-[42px] px-10 py-[60px] bg-neutralwhite rounded-lg shadow-[0px_4px_8px_#0000001a]">
          <div className="flex items-center gap-[30px] w-full">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Full Name *"
                className="h-[54px] border-0 border-b border-neutral-300 rounded-none px-2 py-2.5 [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="flex-1">
              <Input
                type="email"
                placeholder="Company Email *"
                className="h-[54px] border-0 border-b border-neutral-300 rounded-none px-2 py-2.5 [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <Select>
            <SelectTrigger className="h-[54px] w-full border-0 border-b border-neutral-300 rounded-none px-2 py-2.5 [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-base focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="What Are You Looking For? *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="service1">Service 1</SelectItem>
              <SelectItem value="service2">Service 2</SelectItem>
              <SelectItem value="service3">Service 3</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Your Message *"
            className="min-h-[54px] border-0 border-b border-neutral-300 rounded-none px-2 py-2.5 [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-base resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />

          <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-neutralwhite rounded-[50px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[50px] before:[background:linear-gradient(114deg,rgba(0,218,255,1)_0%,rgba(251,8,4,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
            <span className="[font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
              Submit Now
            </span>
          </Button>
        </div>

        <div className="flex flex-col items-end gap-3.5 flex-1">
          <h2 className="self-stretch [font-family:'Montserrat',Helvetica] text-neutralwhite text-5xl text-right tracking-[0] leading-[normal]">
            <span className="font-bold">Let&apos;s Get </span>
            <span className="font-normal">In Touch</span>
          </h2>

          <p className="self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-100 text-lg text-right tracking-[0] leading-[normal]">
            Your ideas matter. Contact us today and let&apos;s turn them into
            reality.
          </p>
        </div>
      </div>

      <img
        className="absolute right-[-140px] bottom-[-213px] w-[351px] h-[220px]"
        alt="Frame"
        src="/frame-1000005354.svg"
      />
    </section>
  );
};
