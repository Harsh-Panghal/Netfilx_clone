import { Code, Paintbrush, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, and modern web technologies"
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-secondary" />,
      title: "UI/UX Design",
      description: "Creating beautiful, user-centered digital experiences"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Performance",
      description: "Optimizing applications for speed and accessibility"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-card rounded-full shadow-glow flex items-center justify-center">
                <div className="w-56 h-56 bg-muted rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-inter">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;