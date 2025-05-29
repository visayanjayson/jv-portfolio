
const SkillSection = () => {
    return (
      <section id="skill" className="bg-background">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 mb-6 gap-4">
          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Netsuite</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SuiteScript",
                "SDF",
                "Customization",
                "Saved Search",
                "Suite Analytics",
                "Relationships",
                "Multi-book Accounting",
                "Role Permission",
                "Tax Reports",
                "Clean Architecture",
                "Performance",
                "Migration",
                "Integration",
                "Technical Documentation"
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SuiteScript",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Elixir Phoenix"
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

          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Redux",
                "Next.js",
                "Node.js",
                "Semantic UI",
                "Material UI",
                "Ant Design"
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

          <div className="bg-card rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "VS Code", "Vite", "Jest - unit test", "Cypress", "Jira", "Confluence", "Qase"].map(
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
    );
  };

  export default SkillSection;