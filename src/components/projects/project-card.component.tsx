import { useState, useEffect, useCallback } from "react";

import {
  Card,
  CardTop,
  Gallery,
  SliderItem,
  Description,
  TechStack,
} from "./styles";
import { HrzntlLn } from "../../utils/styles.util";
import { projectsPageTranslations } from "../../utils/translations.util";

import codeIcon from "../../assets/icons/code.png";
import openIcon from "../../assets/icons/open.png";

import { useCommonContext } from "../../contexts/common.context";
import { Project } from "../../data/projects.data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isDark, language } = useCommonContext();

  const [currImage, setCurrImage] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setCurrImage((prev) => (prev + 1) % project.gallery.length);
    }, 2100);
    return () => clearInterval(interval);
  }, [active, project.gallery.length]);

  const toggleActive = useCallback(
    () => setActive((prev) => !prev),
    [setActive]
  );

  return (
    <Card onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
      <CardTop dark={isDark}>
        <span>{project.title}</span>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.src_code_link}
          >
            <img src={codeIcon} alt="code" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.demo_link}
          >
            <img src={openIcon} alt="open" />
          </a>
        </div>
      </CardTop>
      <Gallery>
        <img
          src={project.gallery[currImage]}
          alt={"image " + (currImage + 1 + "")}
        />
        <div>
          {project.gallery.slice(0, 5).map((val, idx) => (
            <SliderItem
              key={val}
              selected={idx === currImage}
              onClick={() => setCurrImage(idx)}
            />
          ))}
        </div>
      </Gallery>
      <Description>{project.description}</Description>
      <HrzntlLn />
      <TechStack key={language}>
        {projectsPageTranslations.techStack[+language]}:{" "}
        {project.tech_stack.join(", ")}
      </TechStack>
      <HrzntlLn />
    </Card>
  );
};

export default ProjectCard;
