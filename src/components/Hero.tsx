import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4">
            Hi, I'm <span className="text-yellow-300">Sarah Mitchell</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Business Analyst transforming data into actionable insights and driving strategic business decisions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-white text-white hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.5 } }}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} className="text-white" />
        </motion.button>
      </div>
    </section>
  );
}
