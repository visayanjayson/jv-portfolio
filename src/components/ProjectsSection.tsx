import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ProjectCard from "./ProjectCard";
import { Badge } from "./ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
  category: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and personal projects. Each project
            demonstrates different skills and technologies.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="other">Other Projects</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} title={""} description={""} imageUrl={""} technologies={[]} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "web")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} title={""} description={""} imageUrl={""} technologies={[]} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "mobile")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} title={""} description={""} imageUrl={""} technologies={[]} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "other")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} title={""} description={""} imageUrl={""} technologies={[]} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/username/ecommerce-project",
    category: "web",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A mobile application for managing tasks, setting reminders, and tracking productivity with analytics.",
    imageUrl:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://example.com/task-app-demo",
    githubUrl: "https://github.com/username/task-management-app",
    category: "mobile",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive web application that displays current weather and forecasts based on user location or search.",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["JavaScript", "HTML/CSS", "Weather API"],
    githubUrl: "https://github.com/username/weather-dashboard",
    category: "web",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, built with modern web technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    category: "web",
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description:
      "A mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    technologies: ["Flutter", "Firebase", "Charts"],
    githubUrl: "https://github.com/username/fitness-tracker",
    category: "mobile",
  },
  {
    id: "6",
    title: "Machine Learning Model",
    description:
      "A machine learning project for image classification using convolutional neural networks.",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    technologies: ["Python", "TensorFlow", "Keras"],
    githubUrl: "https://github.com/username/ml-image-classifier",
    category: "other",
  },
];

export default ProjectsSection;
