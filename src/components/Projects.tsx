import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "CRM System Implementation",
      description: "Led requirements gathering and analysis for enterprise CRM implementation serving 500+ users. Collaborated with stakeholders to define business processes and system requirements.",
      image: "https://images.unsplash.com/photo-1663770114127-4f61cb62b56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm0lMjBzeXN0ZW0lMjBjb21wdXRlcnxlbnwxfHx8fDE3NjEyOTE1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Requirements Analysis", "Salesforce", "Process Mapping", "UAT"],
      impact: "25% increase in sales productivity",
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Designed and delivered interactive Power BI dashboards providing real-time sales insights. Created KPIs and metrics that enabled data-driven decision making for executive team.",
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTI4Mjc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Power BI", "SQL", "Data Visualization", "KPI Development"],
      impact: "Reduced reporting time by 60%",
    },
    {
      title: "Business Process Optimization",
      description: "Analyzed and optimized order fulfillment process using Six Sigma methodology. Documented current and future state processes, identified bottlenecks, and proposed solutions.",
      image: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjEyNDg2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Six Sigma", "BPMN", "Gap Analysis", "Process Improvement"],
      impact: "35% reduction in processing time",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="projects-heading" className="text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Key projects demonstrating business analysis expertise and measurable business impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                      <TrendingUp size={20} />
                      <span className="text-sm">{project.impact}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <FileText size={16} className="mr-1" />
                      View Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
