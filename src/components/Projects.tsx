import ProjectCard, { Project } from './ProjectCard';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import taskManagerImg from '@/assets/project-taskmanager.jpg';
import weatherImg from '@/assets/project-weather.jpg';
import portfolioImg from '@/assets/project-portfolio.jpg';
import socialImg from '@/assets/project-social.jpg';
import lmsImg from '@/assets/project-lms.jpg';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management, secure payment processing, and responsive design.",
      imageUrl: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      imageUrl: taskManagerImg, 
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard displaying real-time weather data with beautiful visualizations and location-based forecasts.",
      imageUrl: weatherImg,
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative projects with smooth animations and modern design principles.",
      imageUrl: portfolioImg,
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management tool with analytics, scheduling features, and multi-platform integration.",
      imageUrl: socialImg,
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules for online education.",
      imageUrl: lmsImg,
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            design, and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="animate-fade-in">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;