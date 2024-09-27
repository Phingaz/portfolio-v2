import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import SectionHead from "../Utils/SectionHead";
import ScrollLogo from "../Utils/ScrollLogo";

const Hero = () => {
  return (
    <section id="hero" className="container screen-height py-0">
      <div className="flex flex-col md:flex-row justify-center md:items-center gap-1 py-5">
        <div className="md:w-[50%]">
          <h1 className="text-hero-text font-[500] leading-[1.4] mb-5 text-heading">
            Hello, I am <span className="font-bold">Prosper Agwegiokhe</span>.
            <br />A
            <span className="outlined tracking-wider"> Software Developer</span>
            <br />
            Based In <span className="font-bold">Brasil</span>.
          </h1>
          <p className="text-gray-500 text-sm md:max-w-[500px] hover:text-gray-700 transition-all">
            As a Frontend Developer, I specialize in crafting dynamic,
            responsive, and visually stunning web experiences that blend design
            with functionality. From intuitive user interfaces to seamless
            navigation. Let&apos;s build the digital future—one pixel at a time!
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link href="https://github.com/Phingaz" target="_blank">
              <Button variant="inverted" className="p-2">
                <Github size={20} />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/piinoya" target="_blank">
              <Button variant="inverted" className="p-2">
                <Linkedin size={20} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block flex-1 min-h-[500px]">
          <Image fill priority src="/hero.svg" alt="hero-svg" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-1 pb-10">
        <SectionHead first="My" second="Skills" />
        <ScrollLogo />
      </div>
    </section>
  );
};

export default Hero;