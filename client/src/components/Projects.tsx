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
    title: "ECD Data Management App",
    description: "Developed a web-based application to digitize data tracking for Early Childhood Development (ECD) programs. The system enables field officers and program staff to collect, manage, and monitor beneficiary data efficiently, even in areas with limited or no internet connectivity. It features real-time dashboards, secure user access based on roles, and automatic data synchronization once online. The app is designed to improve accuracy, transparency, and efficiency in program monitoring and reporting.",
    technologies: ["Flask", "Jinja", "Tailwind CSS", "PostgreSQL", "Progressive Web App (PWA)", "JavaScript", "HTML"]
,
    liveUrl: "https://lrdp.onrender.com",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    title: "Chama Management App",
    description: "Built a full-stack web application for managing finances within Chama (social savings) groups. The system allows members to register, track both welfare and investment accounts, process bulk payments, manage loans, and apply penalties automatically or manually. It provides real-time financial reporting, secure logins, offline access via PWA features, and data export capabilities. Designed to be mobile-friendly and usable in areas with low or intermittent connectivity.",
    technologies: ["Flask", "Jinja", "Tailwind CSS", "PostgreSQL", "Progressive Web App (PWA)", "JavaScript", "HTML", "REST API", "Formik", "Service Workers"],
    liveUrl: "https://chamap.onrender.com",
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
