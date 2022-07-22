import { createContext, ReactNode, useContext, useState } from "react";

interface ProjectContextInterface {
  searchField: string;
  setSearchField?: (val: string)  => void;
}

const defaultState: ProjectContextInterface = {
  searchField: ''
};

export const ProjectContext = createContext<ProjectContextInterface>(defaultState);

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [searchField, setSearchField] = useState<string>(defaultState.searchField);

  return (
    <ProjectContext.Provider value={{
      searchField, setSearchField
    }}
    >{children}</ProjectContext.Provider>
  );
};
