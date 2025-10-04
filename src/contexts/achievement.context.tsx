import { createContext, ReactNode, useContext, useState } from "react";
import { Achievement } from "../data/achievements.data";

interface AchievementContextInterface {
  currAchievement: null|Achievement;
  setCurrAchievement?: (val: null|Achievement) => void;
}

const defaultState: AchievementContextInterface = {
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
      currAchievement, setCurrAchievement
    }}>{children}</AchievementContext.Provider>
  );
};
