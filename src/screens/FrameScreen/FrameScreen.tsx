import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavbarSection } from "./sections/NavbarSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start relative">
      <NavbarSection />
      <EducationSection />
      <ContactSection />
      <BenefitsSection />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ClientTestimonialsSection />
      <FooterSection />
    </div>
  );
};
