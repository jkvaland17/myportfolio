import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise Dashboard",
      description: "A comprehensive analytics dashboard for enterprise clients featuring real-time data visualization, custom reporting, and advanced filtering capabilities.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
      features: [
        "Real-time data updates",
        "Custom report generation",
        "Role-based permissions",
        "Export functionality",
        "Mobile responsive"
      ],
      category: "Web Application",
      status: "Completed",
      duration: "3 months",
      github: "https://github.com/hjcodecraft/enterprise-dashboard",
      live: "https://dashboard.hjcodecraft.com"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with inventory management, payment processing, and admin portal. Built for scalability and performance.",
      image: project2,
      technologies: ["Next.js", "Stripe", "MongoDB", "AWS", "Tailwind CSS"],
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Order tracking",
        "Inventory management",
        "SEO optimization"
      ],
      category: "E-Commerce",
      status: "Completed",
      duration: "4 months",
      github: "https://github.com/hjcodecraft/ecommerce-platform",
      live: "https://shop.hjcodecraft.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with team features, project organization, and progress tracking. Designed for modern teams.",
      image: project3,
      technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
      features: [
        "Team collaboration",
        "Project organization",
        "Progress tracking",
        "File attachments",
        "Push notifications"
      ],
      category: "Mobile Application",
      status: "In Progress",
      duration: "2 months",
      github: "https://github.com/hjcodecraft/task-manager",
      live: null
    }
  ];

  const categories = ["All", "Web Application", "E-Commerce", "Mobile Application"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative solutions we've built for our clients. 
            Each project showcases our commitment to quality and modern development practices.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "outline"}
                      className={project.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{project.duration}</span>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We'd love to hear about your ideas and help bring them to life.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Start Your Project
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;