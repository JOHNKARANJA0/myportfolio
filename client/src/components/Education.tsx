import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Software Engineering",
    institution: "Moringa School",
    location: "Nairobi, Kenya",
    period: "February 2024 - August 2024",
    description: "Intensive software engineering bootcamp focusing on full-stack development with Python, JavaScript, React, Flask, and Django. Gained hands-on experience in building real-world applications and collaborative development practices.",
    type: "Certificate"
  },
  {
    degree: "Bachelor of Science in Mathematics and Computer Science",
    institution: "Machakos University (MKSU)",
    location: "Machakos, Kenya",
    period: "2019 - 2023",
    grade: "Second Class",
    major: "Statistics",
    description: "Comprehensive degree program combining mathematical foundations with computer science principles. Major in Statistics with coursework covering algorithms, data structures, database systems, and statistical analysis.",
    type: "Bachelor's Degree"
  },
  {
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    institution: "Githumu Boys High School",
    location: "Murang'a, Kenya",
    period: "2015 - 2018",
    description: "Completed secondary education with focus on Mathematics, Sciences, and English. Developed strong analytical and problem-solving skills that formed the foundation for my technical career.",
    type: "Secondary"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <div className="text-primary font-semibold mb-2">{edu.institution}</div>
                    <div className="text-muted-foreground mb-4">{edu.location}</div>
                    {edu.major && (
                      <div className="text-sm text-muted-foreground mb-4">Major: {edu.major}</div>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  <div className="lg:w-1/3 lg:text-right mt-4 lg:mt-0">
                    <div className="text-muted-foreground font-medium">{edu.period}</div>
                    {edu.grade && (
                      <div className="text-muted-foreground text-sm mt-1">{edu.grade}</div>
                    )}
                    <div className="mt-2 flex lg:justify-end">
                      <Badge variant="secondary">{edu.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
