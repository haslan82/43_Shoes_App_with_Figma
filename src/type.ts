export type Shoe = {
  id: string;
  name: string;
  picture: string[];
  description: string;
  isNew?: boolean;
  discount?: number;
  size: string;
  color: string;
  gender: "men" | "women";
  price: number;
};
