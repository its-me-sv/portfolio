import { useState, useEffect, useCallback } from 'react';

import {
  Card,
  CardTop,
  Gallery,
  SliderItem,
  Description,
  TechStack,
  CardBottom
} from "./styles";
import { HrzntlLn } from '../../utils/styles.util';
import { projectsPageTranslations } from '../../utils/translations.util';

import codeIcon from '../../assets/icons/code.png';
import openIcon from '../../assets/icons/open.png';

import likeIcon from '../../assets/icons/like.png';
import commentIcon from '../../assets/icons/comment.png';
import shareIcon from '../../assets/icons/share.png';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';

const dummyImages: Array<string> = [
  "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p2_m09p2l.png",
  "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p3_ewimbe.png",
  "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p1_kcjmc5.png",
  "https://res.cloudinary.com/djeteilo6/image/upload/v1657349877/portfolio/projects/%20Stone_Paper_Scissors/p4_nq1qo8.png",
];

const skills: Array<string> = [
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
  'Cassandra', 'Redis', 'Python',
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
  'Cassandra', 'Redis', 'Python',
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
  'HTML', 'CSS', 'JavaScript',
  'React', 'Redux', 'Mongodb',
  'Cassandra', 'Redis', 'Python',
];

interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  const { isDark, language, isMobile } = useCommonContext();
  const { setSection } = useCommentsContext();
  
  const [currImage, setCurrImage] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = useCallback(() => setActive(prev => !prev), [setActive]);

  const onCommentClick = useCallback(() => setSection!('Project Title'), [setSection]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setCurrImage(prev => (prev + 1) % dummyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <Card 
      dark={isDark} 
      mobile={isMobile} 
      onMouseEnter={toggleActive} 
      onMouseLeave={toggleActive}
    >
      <CardTop dark={isDark}>
        <span>Project Title</span>
        <div>
          <img src={codeIcon} alt="code" />
          <img src={openIcon} alt="open" />
        </div>
      </CardTop>
      <Gallery dark={isDark}>
        <img
          key={"image " + (currImage + 1 + "")}
          src={dummyImages[currImage]}
          alt={"image " + (currImage + 1 + "")}
        />
        <div>
          {dummyImages.map((val, idx) => (
            <SliderItem
              key={val}
              selected={idx === currImage}
              onClick={() => setCurrImage(idx)}
              dark={isDark}
            />
          ))}
        </div>
      </Gallery>
      <Description dark={isDark}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        tempus quam, id porta velit. Integer facilisis dolor ac arcu imperdiet,
        eget feugiat arcu vestibulum. Aenean ultricies erat ac odio egestas
        aliquet dictum ante id pharetra. Nulla vulputate dignissim libero
      </Description>
      <HrzntlLn dark={isDark} />
      <TechStack dark={isDark} key={language}>
        {projectsPageTranslations.techStack[+language]}: {skills.join(", ")}
      </TechStack>
      <HrzntlLn dark={isDark} />
      <CardBottom dark={isDark}>
        <div>
          <img src={likeIcon} alt="like" />
          <span>7</span>
        </div>
        <div>
          <img onClick={onCommentClick} src={commentIcon} alt="comment" />
          <span>34</span>
        </div>
        <div>
          <img src={shareIcon} alt="share" />
          <span>4</span>
        </div>
      </CardBottom>
    </Card>
  );
};

export default ProjectCard;
