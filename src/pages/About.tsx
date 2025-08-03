import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Target } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We prioritize code quality, best practices, and maintainable solutions that stand the test of time."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time while maintaining the highest standards."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, ensuring transparent communication throughout the development process."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, continuously learning and adapting to new technologies."
    }
  ];

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", 
    "PostgreSQL", "AWS", "Docker", "Git", "API Design", "UI/UX"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              About H&J Codecraft
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are two passionate software engineers dedicated to creating exceptional 
              digital experiences through modern web technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  H&J Codecraft was founded by two software engineers who share a passion 
                  for creating high-quality web applications. With combined experience in 
                  various industries, we understand the importance of building solutions 
                  that not only work but scale and evolve with your business needs.
                </p>
                <p>
                  We specialize in modern JavaScript frameworks and have a deep understanding 
                  of full-stack development. Our approach combines technical expertise with 
                  business acumen to deliver solutions that drive real value.
                </p>
                <p>
                  Whether you're a startup looking to build your first product or an 
                  established company seeking to modernize your tech stack, we're here 
                  to help you achieve your goals.
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src={teamPhoto}
                alt="H&J Codecraft Team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools we master to deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The engineers behind H&J Codecraft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">H</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Engineer H
                </h3>
                <p className="text-muted-foreground mb-4">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-muted-foreground">
                  Specializes in React, Node.js, and cloud architecture. 
                  Passionate about creating scalable and maintainable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">J</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Engineer J
                </h3>
                <p className="text-muted-foreground mb-4">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-muted-foreground">
                  Expert in modern JavaScript frameworks and database design. 
                  Focused on performance optimization and user experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;