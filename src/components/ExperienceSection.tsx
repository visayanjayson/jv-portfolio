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
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
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
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2021",
    endDate: "Present",
    description: [
      "Led a team of 5 developers in building a cloud-based analytics platform",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Architected microservices infrastructure using Kubernetes and Docker",
      "Mentored junior developers and conducted code reviews",
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
    type: "work",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "Austin, TX",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    description: [
      "Developed responsive web applications using React and Redux",
      "Built RESTful APIs using Express.js and MongoDB",
      "Implemented authentication and authorization using JWT",
      "Collaborated with UX designers to implement user-friendly interfaces",
    ],
    skills: [
      "JavaScript",
      "React",
      "Redux",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    type: "work",
  },
  {
    id: "3",
    title: "Junior Web Developer",
    company: "Creative Web Solutions",
    location: "Seattle, WA",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    description: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with the design team to implement UI/UX improvements",
      "Optimized website performance and SEO",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "SEO"],
    type: "work",
  },
  {
    id: "4",
    title: "Master of Science in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    startDate: "Sep 2014",
    endDate: "May 2016",
    description: [
      "Specialized in Artificial Intelligence and Machine Learning",
      'Thesis: "Neural Networks for Natural Language Processing"',
      "GPA: 3.9/4.0",
      "Teaching Assistant for Data Structures and Algorithms",
    ],
    skills: [
      "Machine Learning",
      "Neural Networks",
      "NLP",
      "Python",
      "Research",
    ],
    type: "education",
  },
  {
    id: "5",
    title: "Bachelor of Science in Computer Engineering",
    company: "University of Washington",
    location: "Seattle, WA",
    startDate: "Sep 2010",
    endDate: "May 2014",
    description: [
      "Minor in Mathematics",
      "Dean's List: 7 semesters",
      "Senior Project: IoT Home Automation System",
      "Member of ACM Student Chapter",
    ],
    skills: [
      "C++",
      "Java",
      "Data Structures",
      "Algorithms",
      "Computer Architecture",
    ],
    type: "education",
  },
];

export default ExperienceSection;
