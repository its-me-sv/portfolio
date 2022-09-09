export interface Quote {
  content: string;
  id: number;
}

export const quotes: Array<Quote> = [
  {
    id: 0,
    content: `“Organs are like modules,
    nerves are the compiler,
    brain is the programmer,
    and you are the user”`,
  },
  {
    id: 1,
    content: `“Tweet less, code more”`,
  },
  {
    id: 2,
    content: `“The longer you wait, the better you get”`,
  },
  {
    id: 3,
    content: `“There cannot exist a Steve Jobs without a Steve Wozniak”`,
  },
];
