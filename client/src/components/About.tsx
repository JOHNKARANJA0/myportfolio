import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/40">MJK</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Passionate About Building Innovative Solutions
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Junior Developer with a strong foundation in <strong>Python (Flask and Django)</strong>{" "}
              and <strong>JavaScript (React)</strong>, complemented by proficiency in HTML and CSS. 
              I'm passionate about building dynamic, user-friendly web applications and eager to contribute 
              to innovative projects.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adept at both front-end and back-end development, I have a keen interest in continuous 
              learning and professional growth. My experience spans from building full-stack applications 
              to working with APIs, databases, and modern development tools.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <Badge variant="secondary">Full Stack Developer</Badge>
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Team Player</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
