import React from "react";
import HeroSection from "./sections";
import { MotionDiv } from "./ui/animateOnEnter";

const sectionsData = [
  {
    title: "Welcome to Digital Fortress Investment Platform",
    description:
      "Join the Digital Fortress Investment Platform and unlock the potential for significant returns. By investing a small amount, you can access high-yield opportunities that were once only available to elite investors. Our platform leverages cutting-edge technology to provide secure, transparent, and profitable investment options. Take the first step towards financial independence with Digital Fortress.",
    buttonText1: "Learn More",
    buttonText2: "Start Investing",
    imageUrl: "/image-fortress.jpeg",
    reverse: false,
  },
  {
    title: "Maximize Your Earnings with Digital Fortress",
    description:
      "At Digital Fortress, we offer investment opportunities that maximize your earnings. Our advanced algorithms and expert analysis ensure that your investments are strategically placed for optimal growth. Whether you're a seasoned investor or just starting out, our platform is designed to help you achieve your financial goals. Discover how you can grow your wealth with us.",
    buttonText1: "Discover",
    buttonText2: "Join Now",
    imageUrl: "/image-fortress-1.jpeg",
    reverse: true,
  },
  {
    title: "Secure and Insured Investments",
    description:
      "Your security is our priority. Digital Fortress provides insured investment options, giving you peace of mind as you grow your wealth. Our platform is audited by top security firms to ensure the highest standards of safety and reliability. Join a community that values your security and trust as much as you do.",
    buttonText1: "Our Security",
    buttonText2: "View Reports",
    imageUrl: "/image-fortress-2.jpeg",
    reverse: false,
  },
  {
    title: "Recognized and Trusted Platform",
    description:
      "Digital Fortress has been recognized by leading financial publications and platforms for our innovative approach to investment. Our technology and commitment to providing high returns have been featured globally, reinforcing our position as a trusted investment platform. Learn more about our achievements and how we can help you succeed.",
    buttonText1: "Read More",
    buttonText2: "Our Achievements",
    imageUrl: "/image-fortress-3.jpeg",
    reverse: true,
  },
  {
    title: "24/7 Customer Support",
    description:
      "At Digital Fortress, we believe in providing exceptional customer service. Our dedicated support team is available 24/7 to assist you with any questions or concerns. We are here to ensure your investment journey is smooth and successful. Connect with us anytime and experience our commitment to your satisfaction.",
    buttonText1: "Contact Us",
    buttonText2: "Support Center",
    imageUrl: "/image-fortress-4.jpeg",
    reverse: false,
  },
  {
    title: "Flexible Investment Plans",
    description:
      "Digital Fortress offers a variety of flexible investment plans to suit your needs. Whether you're looking for short-term gains or long-term growth, our platform has a plan that's right for you. Explore our investment options and choose the plan that aligns with your financial goals. Start investing today and watch your wealth grow.",
    buttonText1: "Explore Plans",
    buttonText2: "Get Started",
    imageUrl: "/image-fortress-5.jpeg",
    reverse: true,
  },
];

const Section: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {sectionsData.map((section, index) => (
        <MotionDiv key={index}>
          <HeroSection
            key={index}
            title={section.title}
            description={section.description}
            buttonText1={section.buttonText1}
            buttonText2={section.buttonText2}
            imageUrl={section.imageUrl}
            reverse={section.reverse}
          />
        </MotionDiv>
      ))}
    </div>
  );
};

export default Section;
