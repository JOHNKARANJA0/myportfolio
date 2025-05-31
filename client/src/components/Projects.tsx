import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "IReporter App",
    description: "A powerful platform designed to enable citizens to report incidents of corruption and other societal issues. Features user-friendly interface, evidence attachment through images and videos, geolocation accuracy, and both user and admin dashboards.",
    technologies: ["Flask", "React", "PostgreSQL", "Authentication"],
    liveUrl: "https://ireporter-ke.netlify.app/",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "KGGA Membership System",
    description: "Full Stack web platform for Kenya Girl Guides Association to manage student memberships, payments, schools, and events. Features MPESA integration, RBAC, interactive dashboards with Chart.js, and automated student transitions.",
    technologies: ["Flask", "React", "MPESA API", "Chart.js"],
    liveUrl: "https://voluble-kelpie-0d72d6.netlify.app/",
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Apartment Management App",
    description: "Comprehensive web application for managing apartment properties, tenants, and leases. Features secure authentication, robust property management, lease tracking, and responsive design for both desktop and mobile devices.",
    technologies: ["Flask", "React", "SQLAlchemy", "Bcrypt"],
    liveUrl: "https://apartmentmanagementapp.netlify.app/",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    title: "Task Management App",
    description: "Collaborative web application developed to streamline task management. Features user authentication, task creation, assignment and progress tracking. Built with robust Flask API backend and responsive React frontend.",
    technologies: ["Flask", "React", "SQLAlchemy", "Collaboration"],
    liveUrl: "https://taskmanagerke.netlify.app/",
    gradient: "from-pink-500 to-red-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border border-border overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">Full Stack Application</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      View Live
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
