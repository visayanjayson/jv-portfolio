import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

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
}

const ExperienceSection = ({
  experiences = defaultExperiences,
}: ExperienceSectionProps) => {
  // Group experiences by type
  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const educationExperiences = experiences.filter(
    (exp) => exp.type === "education",
  );

  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experiences</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Work Experiences</h3>
          <div className="space-y-8">
            {workExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-8">
            {educationExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">{experience.title}</h4>
            <p className="text-lg text-muted-foreground">
              {experience.company}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {experience.location}
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              {experience.description.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground whitespace-nowrap">
            {experience.startDate} - {experience.endDate || "Present"}
          </div>
        </div>
      </CardContent>
    </Card>
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

export default ExperienceSection;
