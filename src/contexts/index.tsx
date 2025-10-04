import { CommonContextProvider } from "./common.context";
import { MenuContextProvider } from "./menu.context";
import { TranscriptContextProvider } from "./transcript.context";
import { AchievementContextProvider } from "./achievement.context";
import React from "react";

const providers: Array<React.FC<{children: React.ReactNode}>> = [
  CommonContextProvider,
  MenuContextProvider,
  TranscriptContextProvider,
  AchievementContextProvider,
];

interface RootContextProps {
  children: React.ReactNode;
}

const RootContextProvider: React.FC<RootContextProps> = ({ children }) => {
  return (
    <>
      {providers.reduceRight(
        (acc, ResultComponent) => <ResultComponent>{acc}</ResultComponent>,   
      children)}
    </>
  );
};

export default RootContextProvider;
