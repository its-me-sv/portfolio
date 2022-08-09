import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { toast } from 'react-hot-toast';

import {
  Card,
  CardTop,
  Gallery,
  SliderItem,
  Description,
  TechStack,
  CardBottom,
  LikeIcon
} from "./styles";
import { InteractionIcon } from '../../utils/styles.util';
import { HrzntlLn } from '../../utils/styles.util';
import { projectsPageTranslations } from '../../utils/translations.util';

import codeIcon from '../../assets/icons/code.png';
import openIcon from '../../assets/icons/open.png';

import commentIcon from '../../assets/icons/comment.png';
import shareIcon from '../../assets/icons/share.png';
import { API_URL } from '../../utils/constants.util';

import { useCommonContext } from '../../contexts/common.context';
import { useCommentsContext } from '../../contexts/comments.context';
import { Project, ProjectStats } from '../../data/projects.data';
import { useUserContext } from '../../contexts/user.context';
import { useProjectContext } from '../../contexts/project.context';

interface ProjectCardProps {
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({id}) => {
  const { isDark, language } = useCommonContext();
  const { setCommentsMeta, onUnmount, setCallbacks } = useCommentsContext();
  const { likes, addLike, removeLike, token } = useUserContext();
  const { setDataMapper } = useProjectContext();
  
  const [currImage, setCurrImage] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<Project|null>();
  const [stats, setStats] = useState<ProjectStats|null>();
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    setLiked(likes.includes(id));
    axios.post(
      `${API_URL}/api/projects/${id}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(({data}) => {
      setProjectDetails(data);
      setDataMapper!(prev => ({...prev, [id]: data}));
    });
    axios.post(
      `${API_URL}/api/projects/stats/${id}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(({data}) => setStats(data));
  }, [id, setDataMapper, token]);

  useEffect(() => {
    return () => onUnmount!();
  }, [onUnmount]);

  useEffect(() => {
    if (projectDetails === null || projectDetails === undefined) return;
    if (!active) return;
    const interval = setInterval(() => {
      setCurrImage(prev => (prev + 1) % projectDetails.gallery.length);
    }, 2100);
    return () => clearInterval(interval);
  }, [active, projectDetails]);

  const toggleActive = useCallback(() => setActive(prev => !prev), [setActive]);

  const onCommentClick = useCallback(() => {
    const incCmt = () => {
      setStats((prev) => ({
        comments: `${+(prev?.comments as string || 0) + 1}`,
        likes: prev?.likes as string,
        shares: prev?.shares as string,
      }));
    };
    const decCmt = () => {
      setStats((prev) => ({
        comments: `${+(prev?.comments as string || 0) + 1}`,
        likes: prev?.likes as string,
        shares: prev?.shares as string,
      }));
    };
    setCommentsMeta!("projects", (id + "||" + projectDetails?.title) as string);
    setCallbacks!({incCmt, decCmt});
  }, [id, projectDetails?.title, setCommentsMeta, setCallbacks]);

  const onCodeVisit = () => {
    axios.put(
      `${API_URL}/api/stats/visits/${new Date().getFullYear()}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    );
  };

  const onProjectLaunch = () => {
    axios.put(
      `${API_URL}/api/stats/launches/${new Date().getFullYear()}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    );
  };

  const toggleLike = () => {
    if (!liked) {
      axios.put(
        `${API_URL}/api/projects/like/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        setStats((prev) => ({
          likes: `${+(prev?.likes as string || 0) + 1}`,
          comments: prev?.comments as string,
          shares: prev?.shares as string,
        }));
        addLike!(id);
        setLiked(true);
      });
    } else {
      axios.put(
        `${API_URL}/api/projects/dislike/${id}`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      ).then(() => {
        setStats((prev) => ({
          likes: `${+(prev?.likes as string || 0) - 1}`,
          comments: prev?.comments as string,
          shares: prev?.shares as string,
        }));
        removeLike!(id);
        setLiked(false);
      })
    }
  };

  const onShare = () => {
    axios.put(
      `${API_URL}/api/projects/share/${id}`,
      {},
      {headers: {Authorization: `Bearer ${token}`}}
    ).then(() => {
      navigator.clipboard.writeText(projectDetails?.src_code_link as string);
      toast.success("Source code link copied to clipboard");
      setStats((prev) => ({
        likes: prev?.likes as string,
        comments: prev?.comments as string,
        shares: `${+(prev?.shares as string || 0) + 1}`
      }));
    });
  };

  return (
    <Card onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
      <CardTop dark={isDark}>
        <span>{projectDetails?.title}</span>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={projectDetails?.src_code_link}
            onClick={onCodeVisit}
          >
            <img src={codeIcon} alt="code" />
          </a>
          <a 
            target="_blank" 
            rel="noreferrer" 
            href={projectDetails?.demo_link}
            onClick={onProjectLaunch}
          >
            <img src={openIcon} alt="open" />
          </a>
        </div>
      </CardTop>
      <Gallery>
        <img
          src={projectDetails?.gallery[currImage]}
          alt={"image " + (currImage + 1 + "")}
        />
        <div>
          {projectDetails?.gallery.map((val, idx) => (
            <SliderItem
              key={val}
              selected={idx === currImage}
              onClick={() => setCurrImage(idx)}
            />
          ))}
        </div>
      </Gallery>
      <Description>{projectDetails?.description}</Description>
      <HrzntlLn />
      <TechStack key={language}>
        {projectsPageTranslations.techStack[+language]}:{" "}
        {projectDetails?.tech_stack.join(", ")}
      </TechStack>
      <HrzntlLn />
      <CardBottom>
        <div onClick={toggleLike}>
          <LikeIcon dark={isDark} liked={liked} />
          <span>{stats?.likes !== "0" ? stats?.likes : ""}</span>
        </div>
        <div onClick={onCommentClick}>
          <InteractionIcon dark={isDark} src={commentIcon} alt="comment" />
          <span>{stats?.comments !== "0" ? stats?.comments : ""}</span>
        </div>
        <div onClick={onShare}>
          <InteractionIcon dark={isDark} src={shareIcon} alt="share" />
          <span>{stats?.shares !== "0" ? stats?.shares : ""}</span>
        </div>
      </CardBottom>
    </Card>
  );
};

export default ProjectCard;
