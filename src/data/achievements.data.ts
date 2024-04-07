export interface Achievement {
  title: string;
  description: string;
  credential_link: string;
  verify_url: string;
}

export interface AchievementStats {
  appreciations: string;
  comments: string;
}

export const achivementsIds: Array<string> = [
  '4b058240-1296-11ed-a3c3-d775c5e4f28b',
  '0333ee10-1297-11ed-a3c3-d775c5e4f28b',
  '69ed3b70-1297-11ed-a3c3-d775c5e4f28b',
  '9d98c570-1297-11ed-a3c3-d775c5e4f28b',
  '21432350-306d-11ed-b356-5d17a02705fd',
  '3b6bb400-d2d3-11ed-896c-3bdd1b6c2888',
  '09ec88a0-5956-11ee-a8b5-c70f896cee53',
  '35a29980-f4c4-11ee-af1f-75f39123a280',
].reverse();
