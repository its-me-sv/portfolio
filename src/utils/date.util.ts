const EPOCH: number = Date.now();

export const getRandomDateEpoch = (): number => {
  return Math.floor(Math.random() * (EPOCH + 1));
};
