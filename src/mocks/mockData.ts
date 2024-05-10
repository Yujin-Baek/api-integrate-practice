import cat from "../assets/images/cat.webp";
import dog from "../assets/images/dog.webp";

export type Card = {
  id: string;
  title: string;
  description: string;
  photo: string;
  like: boolean;
};

export const cards: Card[] = [
  {
    id: "1",
    title: "Cat",
    description: "A cute cat.",
    photo: cat,
    like: false,
  },
  {
    id: "2",
    title: "Dog",
    description: "A cute dog.",
    photo: dog,
    like: false,
  },
];
