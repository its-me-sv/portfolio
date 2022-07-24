import { createContext, ReactNode, useContext, useState } from "react";
import { Achievement, achievements } from "../utils/achievements-data"

interface AchievementContextInterface {
  achievements: Array<Achievement>;
  currAchievement: null|string;
  setCurrAchievement?: (val: null|string) => void;
}

const defaultState: AchievementContextInterface = {
  achievements,
  currAchievement: null
};

export const AchievementContext = createContext<AchievementContextInterface>(defaultState);

export const useAchievementContext = () => useContext(AchievementContext);

export const AchievementContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [currAchievement, setCurrAchievement] = useState<null|string>(defaultState.currAchievement);

  return (
    <AchievementContext.Provider value={{
      achievements: defaultState.achievements,
      currAchievement, setCurrAchievement
    }}>{children}</AchievementContext.Provider>
  );
};
