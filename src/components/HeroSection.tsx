import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const HeroSection = ({
  name = "John Doe",
  title = "Software Engineer",
  description = "I'm a passionate software engineer with expertise in building modern web applications. I specialize in React, TypeScript, and Node.js, creating responsive and user-friendly interfaces.",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=software-engineer",
  resumeUrl = "#",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}: HeroSectionProps) => {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Hi, I'm <span className="text-primary">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.github && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {socialLinks.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Avatar className="h-full w-full">
                <AvatarImage
                  src={imageUrl}
                  alt={name}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
