import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Code2, 
  Cloud, 
  Users, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React and Next.js.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-Friendly",
        "Progressive Web Apps"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and modern tools.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "App Store Deployment",
        "Push Notifications"
      ],
      technologies: ["React Native", "Expo", "TypeScript", "Firebase"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions with APIs, databases, and cloud integration.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Real-time Features"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management.",
      features: [
        "AWS/Azure Deployment",
        "Docker Containers",
        "CI/CD Pipelines",
        "Monitoring & Logging"
      ],
      technologies: ["AWS", "Docker", "GitHub Actions", "Vercel"]
    },
    {
      icon: Code2,
      title: "Code Review & Consulting",
      description: "Technical consulting, code reviews, and architecture guidance.",
      features: [
        "Code Quality Assessment",
        "Architecture Review",
        "Best Practices",
        "Performance Audit"
      ],
      technologies: ["ESLint", "SonarQube", "Lighthouse", "Testing"]
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Extend your development team with our expertise on a project basis.",
      features: [
        "Flexible Engagement",
        "Quick Onboarding",
        "Knowledge Transfer",
        "Agile Methodology"
      ],
      technologies: ["Scrum", "Jira", "Slack", "Git Workflow"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, requirements, and technical constraints."
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating detailed project roadmaps, technical specifications, and timeline estimates."
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates, code reviews, and continuous integration."
    },
    {
      step: "04",
      title: "Deployment",
      description: "Seamless deployment to production with monitoring, testing, and documentation."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive software development services to help your business 
            thrive in the digital world. From concept to deployment and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A structured approach that ensures quality and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-slide-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground font-bold text-lg mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg"
                className="group"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;