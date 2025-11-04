import React from "react";

const quickLinks = [
  { label: "Home" },
  { label: "About" },
  { label: "Portfolio" },
  { label: "Career" },
  { label: "Contact Us" },
  { label: "Blogs" },
];

const services = [
  { label: "Salesforce Solutions" },
  { label: "Web Development" },
  { label: "Mobile Development" },
  { label: "Marketing Automation" },
];

const industries = [
  { label: "Hospitality" },
  { label: "E-Commerce" },
  { label: "Real Estate" },
  { label: "Commercial Goods" },
  { label: "Cosmetic" },
  { label: "Education" },
  { label: "Health Care" },
];

const socialIcons = [
  { src: "/frame-6357995.svg", alt: "Frame" },
  { src: "/ic-baseline-facebook.svg", alt: "Ic baseline facebook" },
  { src: "/fa-brands-instagram-square.svg", alt: "Fa brands instagram" },
  { src: "/fa-brands-instagram-square-1.svg", alt: "Fa brands instagram" },
  { src: "/frame-6357992.svg", alt: "Frame" },
];

const contactInfo = [
  {
    icon: "/mask-group.png",
    title: "Jaipur, India",
    subtitle: "Our Address",
  },
  {
    icon: "/mask-group-1.png",
    title: "connect@zoustontech.com",
    subtitle: "Our Mailbox",
  },
  {
    icon: "/mask-group-2.png",
    title: "+91 98765-43210",
    subtitle: "Our Phone",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-primaryfooter py-[100px] px-4">
      <div className="flex flex-col max-w-[1170px] mx-auto items-center gap-[60px]">
        <div className="flex items-start gap-[120px] w-full">
          <div className="flex flex-col w-[359px] items-start gap-[30px]">
            <img
              className="w-[164px] h-[90px] object-cover"
              alt="Image"
              src="/image-36-1.png"
            />

            <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-100 text-lg tracking-[0] leading-[normal]">
              Zouston Tech is a leading Salesforce, IT service &amp; digital
              solution provider dedicated to helping businesses leverage the
              latest technologies to transform their operations and achieve
              their goals.
            </p>

            <img
              className="w-[200px] h-[59px] rounded-lg border border-solid border-white object-cover"
              alt="Image"
              src="/image-37.png"
            />
          </div>

          <div className="flex flex-col w-[691px] items-end gap-20">
            <div className="flex w-[309px] h-10 items-start gap-5">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>

            <div className="flex items-start gap-[30px] w-full">
              <nav className="flex flex-col items-start gap-[11px] flex-1">
                <h3 className="flex items-center justify-center h-[29px] [font-family:'Montserrat',Helvetica] font-bold text-neutralwhite text-base tracking-[0] leading-6">
                  Quick Links
                </h3>

                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2.5 w-full [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralwhite text-base tracking-[0] leading-[22px] whitespace-nowrap hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <nav className="flex flex-col items-start gap-[11px] flex-1">
                <h3 className="flex items-center justify-center h-[29px] [font-family:'Montserrat',Helvetica] font-bold text-neutralwhite text-base tracking-[0] leading-6">
                  Services
                </h3>

                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2.5 w-full [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralwhite text-base tracking-[0] leading-[22px] whitespace-nowrap hover:underline"
                  >
                    {service.label}
                  </a>
                ))}
              </nav>

              <nav className="flex flex-col items-start gap-[11px] flex-1">
                <h3 className="flex items-center justify-center h-[29px] [font-family:'Montserrat',Helvetica] font-bold text-neutralwhite text-base tracking-[0] leading-6">
                  Industries
                </h3>

                {industries.map((industry, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2.5 w-full [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralwhite text-base tracking-[0] leading-[22px] whitespace-nowrap hover:underline"
                  >
                    {industry.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[848px] items-center justify-center gap-[30px]">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3.5 flex-1"
            >
              <img
                className="w-[34px] h-[34px]"
                alt="Mask group"
                src={info.icon}
              />

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="w-full [font-family:'Montserrat',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                  {info.title}
                </div>

                <div className="w-full [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-200 text-sm text-center tracking-[0] leading-[normal]">
                  {info.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute bottom-0 left-0 w-[338px] h-60"
        alt="Frame"
        src="/frame-1000005314-1.svg"
      />
    </footer>
  );
};
