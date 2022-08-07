import { createContext, ReactNode, useCallback, useContext, useState } from "react";

import { 
  projectsIds1, projectsIds2, projectsIds3, projectsIds4 
} from "../data/projects.data";

const projectIdsCombined: Array<Array<string>> = [
  projectsIds1,
  projectsIds2,
  projectsIds3,
  projectsIds4
];

interface ProjectContextInterface {
  searchField: string;
  projectIds: Array<string>;
  currPage: number|null;
  setSearchField?: (val: string) => void;
  fetchProjects?: () => void;
  resetProjects?: () => void;
}

const defaultState: ProjectContextInterface = {
  searchField: '',
  projectIds: [],
  currPage: 0
};

export const ProjectContext = createContext<ProjectContextInterface>(defaultState);

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [searchField, setSearchField] = useState<string>(defaultState.searchField);
  const [projectIds, setProjectIds] = useState<Array<string>>(defaultState.projectIds);
  const [currPage, setCurrPage] = useState<number|null>(defaultState.currPage);

  const fetchProjects = useCallback(() => {
    if (currPage === null) return;
    if (currPage > 3) {
      setCurrPage(null);
      return;
    };
    setProjectIds(prev => [...prev, ...projectIdsCombined[currPage]]);
    setCurrPage(prev => (prev||0) + 1);
  }, [currPage]);

  const resetProjects = useCallback(() => {
    setSearchField('');
    setProjectIds([]);
    setCurrPage(0);
  }, []);

  return (
    <ProjectContext.Provider value={{
      searchField, setSearchField,
      projectIds, currPage,
      fetchProjects, resetProjects, 
    }}
    >{children}</ProjectContext.Provider>
  );
};
