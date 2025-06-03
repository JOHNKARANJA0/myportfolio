import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Mungai John Karanja</h3>
          <p className="text-muted-foreground mb-6">Software Developer passionate about creating innovative solutions</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jonniekaras@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              &copy; 2024 Mungai John Karanja. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
