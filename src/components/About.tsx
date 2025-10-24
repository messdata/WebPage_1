import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="about-heading" className="text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
              <p>
                I'm a results-driven Business Analyst with 6+ years of experience bridging the gap between 
                business needs and technical solutions. I specialize in requirements gathering, process 
                optimization, and data-driven decision making that drives measurable business value.
              </p>
              <p>
                My expertise lies in translating complex business requirements into clear, actionable 
                deliverables. I excel at stakeholder management, facilitating workshops, and creating 
                comprehensive documentation including BRDs, user stories, and process flows. I'm proficient 
                in Agile methodologies and have successfully led multiple cross-functional projects from 
                inception to delivery.
              </p>
              <p>
                With strong analytical skills and tools like SQL, Power BI, and Tableau, I transform raw 
                data into meaningful insights that inform strategic decisions. I'm passionate about continuous 
                improvement and staying current with industry best practices in business analysis.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwb2ZmaWNlfGVufDF8fHx8MTc2MTIyMTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional business environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
