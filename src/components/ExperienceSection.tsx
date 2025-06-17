'use client';

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Skeleton } from "./ui/skeleton";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
  type: "work" | "education";
}

interface ExperienceSectionProps {
  experiences?: ExperienceItem[];
  isLoading?: boolean;
}

export const ExperienceSection = ({
  experiences = defaultExperiences,
  isLoading = false,
}: ExperienceSectionProps) => {
  // Group experiences by type
  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const educationExperiences = experiences.filter(
    (exp) => exp.type === "education",
  );

  if (isLoading) {
    return <ExperienceSectionSkeleton />;
  }

  return (
    <section id="experience" className="bg-background py-16" aria-label="Experience Section">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experiences
        </motion.h2>

        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold mb-8"
          >
            Work Experiences
          </motion.h3>
          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold mb-8"
          >
            Education
          </motion.h3>
          <div className="space-y-8">
            {educationExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const formatDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), "MMM yyyy");
    } catch {
      return dateStr;
    }
  };

  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1">
            <h4 className="text-2xl font-semibold mb-2">{experience.title}</h4>
            <p className="text-lg text-muted-foreground mb-1">
              {experience.company}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {experience.location}
            </p>

            {experience.description.length > 0 && (
              <ul className="list-disc pl-5 space-y-3 mb-6">
                {experience.description.map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {experience.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="text-sm text-muted-foreground whitespace-nowrap font-medium">
            {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : "Present"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ExperienceSectionSkeleton = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <Skeleton className="h-12 w-48 mx-auto mb-12" />
        
        <div className="mb-16">
          <Skeleton className="h-8 w-40 mb-8" />
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-8">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Default experiences data
const defaultExperiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Zone & Co",
    location: "Boston, Massachusetts, USA - Working remotely",
    startDate: "March 2022",
    endDate: "Present",
    description: [
      "Developed SuiteApp that automates the billing process for any transaction",
      "Developed a feature to generate E-Invoicing for NetSuite-to-NetSuite transactions",
      "Handled customization, migration, performance and integration solutions",
      "Created technical documentations for new features and enhancements",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions",
      "Handled customer request customizations and enhancements",
      "Implemented CI/CD pipelines for automated testing and deployment",
      "Mentored junior developers and conducted code reviews",
      "Participated in Agile development processes and sprint planning"
    ],
    skills: [
      "Netsuite",
      "SuiteScript",
      "Javascript",
      "TypeScript",
      "SDF",
      "SuiteApp",
      "API",
      "Customization",
      "Migration",
      "Performance",
      "Integration",
    ],
    type: "work",
  },
  {
    id: "2",
    title: "Platform Software Engineer 2", 
    company: "Oracle Netsuite",
    location: "Makati, Philippines",
    startDate: "Jan 2019",
    endDate: "March 2022",
    description: [
      "Developed SuiteApp that generate tax reports",
      "Developed a tax reporting framework that generates tax reports based on a template",
      "Handled customization, migration and performance solutions",
      "Created technical documentations for new features and enhancements",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions",
      "Ensured code quality through unit testing and code reviews",
      "Implemented CI/CD pipelines for automated testing and deployment",
      "Participated in Agile development processes and sprint planning"
    ],
    skills: [
      "Netsuite",
      "SuiteScript",
      "Javascript",
      "SDF",
      "SuiteApp",
      "Customization",
      "Migration",
      "Performance"
    ],
    type: "work",
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Medilink Network Inc.",
    location: "Makati, Philippines",
    startDate: "July 2017",
    endDate: "Jan 2019",
    description: [
      "Developed and maintained web applications using Elixir and Phoenix framework",
      "Implemented RESTful APIs for mobile applications",
      "Designed and optimized database schemas using SQL",
      "Collaborated with front-end developers to integrate user interfaces",
      "Ensured code quality through unit testing and code reviews",
      "Participated in Agile development processes and sprint planning",
    ],
    skills: ["Elixir", "Phoenix", "JavaScript", "HTML", "CSS", "UI Framework", "SQL"],
    type: "work",
  },
  {
    id: "5",
    title: "Bachelor of Science in Computer Technology",
    company: "EARIST (Eulogio Amang Rodriguez Institute of Science and Technology)",
    location: "Manila, Philippines",
    startDate: "June 2013",
    endDate: "June 2017",
    description: [],
    skills: [
      "C++",
      "Java",
      ".Net",
      "Javascript",
      "Algorithms",
      "Flow chart",
      "Computer Architecture",
      "Design diagram"
    ],
    type: "education",
  },
];
