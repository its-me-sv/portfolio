import { createContext, ReactNode, useContext, useState } from "react";

interface StatContextInterface {
  years: Array<number>;
  currYear: number;
  setCurrYear?: (val: number) => void;
}

const defaultState: StatContextInterface = {
  years: [2022, 2023, 2024, 2025],
  currYear: new Date().getFullYear(),
};

export const StatContext = createContext<StatContextInterface>(defaultState);

export const useStatContext = () => useContext(StatContext);

export const StatContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currYear, setCurrYear] = useState<number>(defaultState.currYear);

  return (
    <StatContext.Provider
      value={{
        years: defaultState.years,
        currYear,
        setCurrYear,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};
