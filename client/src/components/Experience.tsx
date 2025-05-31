import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "IT Attaché",
    company: "Machakos County Government",
    department: "Tourism Department",
    location: "Machakos, Kenya",
    period: "February 2023 - June 2023",
    description: [
      "Worked in the tourism department for four months, gaining valuable skills and experience. Provided technical support by troubleshooting software and hardware issues on computers and updating various software applications.",
      "Played a key role in maintaining the department's IT infrastructure, ensuring smooth and efficient operations."
    ],
    skills: ["Technical Support", "IT Infrastructure", "Software Maintenance"]
  },
  {
    title: "Dispatch and IT Intern",
    company: "Kutuma Kenya Limited",
    location: "Nairobi, Kenya",
    period: "January 2022 - April 2022",
    description: [
      "Assisted in rider management by monitoring timelines and ensuring efficient dispatch operations. Provided technical support to colleagues, troubleshooting and resolving computer-related issues to maintain smooth workflow and productivity."
    ],
    skills: ["Dispatch Management", "Technical Support", "Operations"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-1">{exp.title}</h3>
                  <div className="text-muted-foreground mt-1">
                    {exp.company}
                    {exp.department && (
                      <span className="block text-sm">({exp.department})</span>
                    )}
                  </div>
                  <div className="text-muted-foreground text-sm">{exp.location}</div>
                </div>
                <div className="lg:w-2/3">
                  <Card>
                    <CardContent className="p-6">
                      {exp.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                          {desc}
                        </p>
                      ))}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
