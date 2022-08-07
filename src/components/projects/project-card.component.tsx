import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

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
import { API_URL } from '../../utils/constants.util';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';
import { Project, ProjectStats } from '../../data/projects.data';
import { useUserContext } from '../../contexts/user.context';

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

interface ProjectCardProps {
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({id}) => {
  const { isDark, language } = useCommonContext();
  const { setCommentsMeta, onUnmount } = useCommentsContext();
  const { likes } = useUserContext();
  
  const [currImage, setCurrImage] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<Project|null>();
  const [stats, setStats] = useState<ProjectStats|null>();
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    setLiked(likes.includes(id));
    axios.post(`${API_URL}/api/projects/${id}`)
    .then(({data}) => setProjectDetails(data));
    axios.post(`${API_URL}/api/projects/stats/${id}`)
    .then(({data}) => setStats(data));
  }, [id]);

  useEffect(() => {
    return () => onUnmount!();
  }, [onUnmount]);

  useEffect(() => {
    if (projectDetails === null || projectDetails === undefined) return;
    if (!active) return;
    const interval = setInterval(() => {
      setCurrImage(prev => (prev + 1) % projectDetails.gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, projectDetails]);

  const toggleActive = useCallback(() => setActive(prev => !prev), [setActive]);

  const onCommentClick = useCallback(
    () => setCommentsMeta!("projects", 'Project Title'), [setCommentsMeta]);

  return (
    <Card dark={isDark} onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
      <CardTop dark={isDark}>
        <span>{projectDetails?.title}</span>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={projectDetails?.src_code_link}
          >
            <img src={codeIcon} alt="code" />
          </a>
          <a target="_blank" rel="noreferrer" href={projectDetails?.demo_link}>
            <img src={openIcon} alt="open" />
          </a>
        </div>
      </CardTop>
      <Gallery dark={isDark}>
        <img
          key={"image " + (currImage + 1 + "")}
          src={projectDetails?.gallery[currImage]}
          alt={"image " + (currImage + 1 + "")}
        />
        <div>
          {projectDetails?.gallery.map((val, idx) => (
            <SliderItem
              key={val}
              selected={idx === currImage}
              onClick={() => setCurrImage(idx)}
              dark={isDark}
            />
          ))}
        </div>
      </Gallery>
      <Description dark={isDark}>{projectDetails?.description}</Description>
      <HrzntlLn dark={isDark} />
      <TechStack dark={isDark} key={language}>
        {projectsPageTranslations.techStack[+language]}:{" "}
        {projectDetails?.tech_stack.join(", ")}
      </TechStack>
      <HrzntlLn dark={isDark} />
      <CardBottom dark={isDark}>
        <div>
          <img src={likeIcon} alt="like" />
          <span>{stats?.likes !== "0" ? stats?.likes : ""}</span>
        </div>
        <div onClick={onCommentClick}>
          <img src={commentIcon} alt="comment" />
          <span>{stats?.comments !== "0" ? stats?.comments : ""}</span>
        </div>
        <div>
          <img src={shareIcon} alt="share" />
          <span>{stats?.shares !== "0" ? stats?.shares : ""}</span>
        </div>
      </CardBottom>
    </Card>
  );
};

export default ProjectCard;
