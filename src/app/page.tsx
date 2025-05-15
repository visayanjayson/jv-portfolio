import React from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Hero Section */}
      <HeroSection />

      <Separator className="my-8 w-[80%] max-w-5xl" />

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <ProjectsSection />
      </section>

      <Separator className="my-8 w-[80%] max-w-5xl" />

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "HTML",
                "CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "TailwindCSS",
                "Django",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "AWS", "Firebase", "VS Code", "Figma"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 w-[80%] max-w-5xl" />

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <ExperienceSection />
      </section>

      <Separator className="my-8 w-[80%] max-w-5xl" />

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 shadow-md">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-6">
                Feel free to reach out to me through the form or via my social
                media profiles. I'm always open to discussing new projects,
                opportunities, or partnerships.
              </p>

              <div className="flex items-center mb-3">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@example.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3">Find me on</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-muted py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
