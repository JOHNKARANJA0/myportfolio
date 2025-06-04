import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'assets/Mungai John Karanja CV-1.pdf';
    link.download = 'Mungai_John_Karanja_CV.pdf';
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Mungai</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
            Software Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Junior Developer with a strong foundation in{" "}
            <span className="font-semibold text-primary">Python</span> and{" "}
            <span className="font-semibold text-primary">JavaScript</span>, passionate about building dynamic, 
            user-friendly web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={downloadCV}
              className="inline-flex items-center"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/JOHNKARANJA0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-mungai-karanja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:jonniekaras@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
