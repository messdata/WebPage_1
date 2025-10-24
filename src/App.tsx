import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { SkipToContent } from "./components/SkipToContent";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ErrorBoundary>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <SkipToContent />
        <Navigation />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}
