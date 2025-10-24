import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { BarChart3, FileText, GitBranch, Users, Database, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: <BarChart3 size={24} />,
      title: "Data Analysis & Visualization",
      skills: ["SQL", "Excel", "Power BI", "Tableau", "Python"],
    },
    {
      icon: <FileText size={24} />,
      title: "Requirements Engineering",
      skills: ["User Stories", "Use Cases", "BRD", "FRD", "Gap Analysis"],
    },
    {
      icon: <GitBranch size={24} />,
      title: "Process Modeling",
      skills: ["BPMN", "UML", "Visio", "Lucidchart", "Flowcharts"],
    },
    {
      icon: <Users size={24} />,
      title: "Project Management",
      skills: ["Agile/Scrum", "JIRA", "Confluence", "Azure DevOps", "MS Project"],
    },
    {
      icon: <Database size={24} />,
      title: "Business Intelligence",
      skills: ["Data Warehousing", "ETL", "Reporting", "KPI Development", "Analytics"],
    },
    {
      icon: <Wrench size={24} />,
      title: "Methodologies & Tools",
      skills: ["Six Sigma", "SWOT Analysis", "Stakeholder Mapping", "UAT", "Documentation"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="skills-heading" className="text-center mb-4">Skills & Expertise</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for driving business transformation and data-driven insights
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">{category.icon}</div>
                  <h3 className="text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
