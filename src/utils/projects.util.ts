import { Project } from "../data/projects.data";

export const filteredProjects = (
  dataMapper: { [key: string]: Project },
  id: string,
  searchText: string
): boolean => {
  return Object.values(dataMapper[id]||{}).join('').toLowerCase().includes(searchText.toLowerCase());
};