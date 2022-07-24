import { createContext, ReactNode, useContext, useState } from "react";
import { Achievement, achievements } from "../data/achievements.data"

interface AchievementContextInterface {
  achievements: Array<Achievement>;
  currAchievement: null|Achievement;
  setCurrAchievement?: (val: null|Achievement) => void;
}

const defaultState: AchievementContextInterface = {
  achievements,
  currAchievement: null
};

export const AchievementContext = createContext<AchievementContextInterface>(defaultState);

export const useAchievementContext = () => useContext(AchievementContext);

export const AchievementContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [currAchievement, setCurrAchievement] = useState<null | Achievement>(
    defaultState.currAchievement
  );

  return (
    <AchievementContext.Provider value={{
      achievements: defaultState.achievements,
      currAchievement, setCurrAchievement
    }}>{children}</AchievementContext.Provider>
  );
};
