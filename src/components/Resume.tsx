import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #3e45a8 0%, #070924 100%);
  color: white;
  padding: 100px 0 40px 0;
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
  max-width: 1000px;
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

const Description = styled.h5`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-family: 'Lora', serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
`;

const ResumeCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-family: 'Lora', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin: 0 0 5px 0;
`;

const CardDate = styled.span`
  font-family: 'Lora', serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
`;

const CardSubtitle = styled.h4`
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 15px 0;
`;

const CardContent = styled.p`
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillCategoryTitle = styled.h4`
  font-family: 'Lora', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SkillItem = styled.li`
  font-family: 'Lora', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  line-height: 1.5;
`;

const Resume: React.FC = () => {
  return (
    <ResumeContainer
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
        <PageTitle>Resume</PageTitle>

        <Description>Last updated: Aug 2025</Description>
        
        <Section>
          <SectionTitle>Education</SectionTitle>
          <ResumeCard>
            <CardHeader>
              <CardTitle>Cornell University, College of Engineering</CardTitle>
            </CardHeader>
            <CardSubtitle>B.S. in Computer Science, Intended Minors in Electrical & Computer Engineering/Artificial Intelligence</CardSubtitle>
            <CardContent>
              Ithaca, NY | GPA: 3.9<br/>
              Relevant Courses: Data Structures & Object-Oriented Programming, Discrete Structures, Linear Algebra, 
              Engineering Probability & Statistics, Intro to Machine Learning
            </CardContent>
          </ResumeCard>
        </Section>

        <Section>
          <SectionTitle>Tech Stack</SectionTitle>
          <SkillsSection>
            <SkillCategory>
              <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Python</SkillItem>
                <SkillItem>Java</SkillItem>
                <SkillItem>SQL</SkillItem>
                <SkillItem>R</SkillItem>
                <SkillItem>Typescript</SkillItem>
                <SkillItem>Javascript</SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <SkillCategoryTitle>Frameworks/Libraries</SkillCategoryTitle>
              <SkillList>
                <SkillItem>ROS2</SkillItem>
                <SkillItem>Pandas</SkillItem>
                <SkillItem>NumPy</SkillItem>
                <SkillItem>Matplotlib</SkillItem>
                <SkillItem>PyTorch</SkillItem>
                <SkillItem>OpenCV</SkillItem>
                <SkillItem>React</SkillItem>
                <SkillItem>Next.js</SkillItem>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <SkillCategoryTitle>Tools/Technologies</SkillCategoryTitle>
              <SkillList>
                <SkillItem>Docker</SkillItem>
                <SkillItem>Git/Github</SkillItem>
                <SkillItem>Linux</SkillItem>
                <SkillItem>Onshape (Computer Aided Design)</SkillItem>
              </SkillList>
            </SkillCategory>
          </SkillsSection>
        </Section>

        <Section>
          <SectionTitle>Experience and Activities</SectionTitle>

          <ResumeCard>
            <CardHeader>
              <CardTitle>Nexus Project Team, Software Developer</CardTitle>
              <CardDate>Nov 2024 - Present</CardDate>
            </CardHeader>
            <CardSubtitle>Ithaca, NY</CardSubtitle>
            <CardContent>
              • Collaborated with diverse team of software/hardware engineers to create autonomous robot to filter microplastics from beach<br/>
              • Designed and integrated a path planning algorithm with steering control to optimize autonomous, smooth robot navigation<br/>
              • Researched obstacle avoidance using LiDAR-based SLAM with DepthAI RGB-D input and YOLOv8 object detection
            </CardContent>
          </ResumeCard>

          <ResumeCard>
            <CardHeader>
              <CardTitle>UCSD Picasso Lab, Undergraduate Research Assistant</CardTitle>
              <CardDate>May 2025 - Sept 2025</CardDate>
            </CardHeader>
            <CardSubtitle>San Diego, CA</CardSubtitle>
            <CardContent>
              • Developed an autonomous, LLM-driven compiler optimization pipeline to auto-tune tensor programs for spatial accelerators<br/>
              • Designed, deployed, and iterated on prompt engineering strategies to control multi-agent LLM-based optimization tasks<br/>
              • Integrated large language models with architecture-specific cost models for end-to-end hardware-aware performance tuning
            </CardContent>
          </ResumeCard>
          
          <ResumeCard>
            <CardHeader>
              <CardTitle>Cornell Data Journal, Project Lead</CardTitle>
              <CardDate>Feb 2025 - Jun 2025</CardDate>
            </CardHeader>
            <CardSubtitle>Ithaca, NY</CardSubtitle>
            <CardContent>
              • Investigative journalism publication focused on data communication, interdisciplinary research, and public engagement<br/>
              • Led a team of four in analyzing crime trends in NY State, utilizing Python and R to develop and publish an interactive article<br/>
              • Oversaw research process, data analysis, and visualization by assigning tasks and providing technical guidance to members
            </CardContent>
          </ResumeCard>
        </Section>

        <Section>
          <SectionTitle>Research Projects</SectionTitle>
          <ResumeCard>
            <CardHeader>
              <CardTitle>Hybrid Machine Learning Model for Urban Emissions Prediction</CardTitle>
              <CardDate>Feb 2025 - May 2025</CardDate>
            </CardHeader>
            <CardContent>
              • Conducted research under Cornell Professor Oliver Gao/Dr. Yishuo Jiang to develop a hybrid kriging and random forest model<br/>
              • Designed a weighted framework combining universal kriging/random forest, integrating heterogeneous data to boost accuracy<br/>
              • Compiled algorithm findings into a 12 page paper and presented at Systems Engineering spring showcase with 250+ attendees
            </CardContent>
          </ResumeCard>
          
          <ResumeCard>
            <CardHeader>
              <CardTitle>Overcoming the Implications of Dark Current on Organic Photodetector Performance</CardTitle>
              <CardDate>July 2023 - Aug 2023</CardDate>
            </CardHeader>
            <CardContent>
              • 4 week intensive research project through the California State Summer School For Mathematics and Science (COSMOS)<br/>
              • Created an academic poster addressing the issue of dark current in organic photodetectors and potential reduction methods<br/>
              • Presented findings at symposium with 200+ attendees, communicating complex concepts and fostering innovative discussions
            </CardContent>
          </ResumeCard>
          
          <ResumeCard>
            <CardHeader>
              <CardTitle>Memristor Artificial Synapse with Spike-Timing-Dependent Plasticity Learning</CardTitle>
              <CardDate>Oct 2022 - Feb 2023</CardDate>
            </CardHeader>
            <CardContent>
              • Conducted independent research under UCSD Professor Yimin Zou, modeling artificial synapse through a memristor circuit<br/>
              • Designed innovative circuit model, followed by various simulation conductions, accumulated into a 20 page research paper<br/>
              • Qualified for Junior Science and Humanities Symposium, sponsored by Department of Defense, 1 of 26 in Southern California
            </CardContent>
          </ResumeCard>
        </Section>
      </ContentWrapper>
    </ResumeContainer>
  );
};

export default Resume;
