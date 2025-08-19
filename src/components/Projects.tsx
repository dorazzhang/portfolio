import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #3e45a8 0%, #070924 100%);
  color: white;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
`;

const Star = styled.div<{ left: string; top: string; size: string; delay: string }>`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.size};
  height: ${props => props.size};
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  filter: blur(1px);
  animation: twinkle 3s ease-in-out infinite;
  animation-delay: ${props => props.delay};
  z-index: 1;

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
`;

const ProjectTech = styled.div`
  font-family: 'Lora', serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  font-family: 'Lora', serif;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  margin: 0 8px 8px 0;
  font-size: 0.85rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  font-family: 'Lora', serif;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  margin-right: 10px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio built with React, TypeScript, and styled-components. Features smooth animations, gradient backgrounds, and a clean design aesthetic.",
      tech: ["React", "TypeScript", "Styled Components", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart functionality, and payment integration.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Machine Learning Model",
      description: "Implemented a machine learning algorithm for data classification using Python, scikit-learn, and pandas. Achieved 95% accuracy on test data.",
      tech: ["Python", "scikit-learn", "pandas", "numpy", "matplotlib"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and drag-and-drop functionality for organizing projects.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard that displays current conditions, forecasts, and historical data with beautiful charts and responsive design.",
      tech: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Weather API"],
      github: "#",
      live: "#"
    },
    {
      title: "Data Visualization Tool",
      description: "Web-based tool for creating interactive charts and graphs from CSV data. Supports multiple chart types and export functionality.",
      tech: ["D3.js", "React", "Python", "Flask", "Pandas"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <ProjectsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <StarsContainer>
        <Star left="5%" top="15%" size="4px" delay="0s" />
        <Star left="15%" top="45%" size="1.5px" delay="0.3s" />
        <Star left="25%" top="25%" size="2px" delay="0.6s" />
        <Star left="35%" top="75%" size="1px" delay="0.9s" />
        <Star left="45%" top="35%" size="3px" delay="1.2s" />
        <Star left="55%" top="65%" size="1.5px" delay="1.5s" />
        <Star left="65%" top="20%" size="2px" delay="1.8s" />
        <Star left="75%" top="80%" size="1px" delay="2.1s" />
        <Star left="85%" top="40%" size="3px" delay="2.4s" />
        <Star left="95%" top="60%" size="1.5px" delay="2.7s" />
        <Star left="20%" top="85%" size="2px" delay="0.2s" />
        <Star left="40%" top="10%" size="1px" delay="0.5s" />
        <Star left="60%" top="90%" size="3px" delay="0.8s" />
        <Star left="80%" top="15%" size="1.5px" delay="1.1s" />
        <Star left="10%" top="70%" size="2px" delay="1.4s" />
        <Star left="30%" top="95%" size="1px" delay="1.7s" />
        <Star left="50%" top="5%" size="4px" delay="2.0s" />
        <Star left="70%" top="50%" size="1.5px" delay="2.3s" />
        <Star left="90%" top="25%" size="2px" delay="2.6s" />
        <Star left="8%" top="35%" size="2.5px" delay="0.1s" />
        <Star left="18%" top="65%" size="1px" delay="0.4s" />
        <Star left="28%" top="15%" size="3px" delay="0.7s" />
        <Star left="38%" top="55%" size="1.5px" delay="1.0s" />
        <Star left="48%" top="25%" size="2px" delay="1.3s" />
        <Star left="58%" top="75%" size="1px" delay="1.6s" />
        <Star left="68%" top="35%" size="2.5px" delay="1.9s" />
        <Star left="78%" top="65%" size="1.5px" delay="2.2s" />
        <Star left="88%" top="45%" size="2px" delay="2.5s" />
        <Star left="12%" top="25%" size="3px" delay="0.15s" />
        <Star left="22%" top="75%" size="1px" delay="0.45s" />
        <Star left="32%" top="45%" size="2px" delay="0.75s" />
        <Star left="42%" top="85%" size="1.5px" delay="1.05s" />
        <Star left="52%" top="15%" size="3px" delay="1.35s" />
        <Star left="62%" top="55%" size="1px" delay="1.65s" />
        <Star left="72%" top="25%" size="2.5px" delay="1.95s" />
        <Star left="82%" top="75%" size="1.5px" delay="2.25s" />
        <Star left="92%" top="35%" size="2px" delay="2.55s" />
        <Star left="7%" top="55%" size="1.5px" delay="0.25s" />
        <Star left="17%" top="25%" size="2px" delay="0.55s" />
        <Star left="27%" top="65%" size="1px" delay="0.85s" />
        <Star left="37%" top="35%" size="3px" delay="1.15s" />
        <Star left="47%" top="75%" size="1.5px" delay="1.45s" />
        <Star left="57%" top="25%" size="2px" delay="1.75s" />
        <Star left="67%" top="55%" size="1px" delay="2.05s" />
        <Star left="77%" top="15%" size="2.5px" delay="2.35s" />
        <Star left="87%" top="65%" size="1.5px" delay="2.65s" />
        <Star left="97%" top="45%" size="2px" delay="2.85s" />
      </StarsContainer>
      <ContentWrapper>
        <PageTitle>Projects</PageTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
