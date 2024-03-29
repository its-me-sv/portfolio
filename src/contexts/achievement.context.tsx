import { createContext, ReactNode, useContext, useState } from "react";
import { Achievement, achivementsIds } from "../data/achievements.data";

interface AchievementContextInterface {
  achievements: Array<string>;
  currAchievement: null|Achievement;
  setCurrAchievement?: (val: null|Achievement) => void;
}

const defaultState: AchievementContextInterface = {
  achievements: achivementsIds,
  currAchievement: null,
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
