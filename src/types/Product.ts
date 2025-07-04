export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: (string | number)[];
  colors: {
    name: string;
    colorClass: string,
    images: string[];
  }[];
};