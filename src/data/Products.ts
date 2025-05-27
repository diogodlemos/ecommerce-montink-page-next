import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Tênis Esportivo Runner Max",
    price: 199.90,
    description:
      "Tênis ideal para corridas e atividades físicas, com solado em borracha antiderrapante e cabedal respirável.",
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: [
      {
        name: "Preto",
        colorClass: "bg-black",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        ],
      },
      {
        name: "branco",
        colorClass: "bg-white",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        ],
      },
      {
        name: "Azul",
        colorClass: "bg-blue-700",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tênis Casual CK One",
    price: 159.90,
    description:
      "Tênis casual com design moderno, ideal para o dia a dia. Confortável e versátil para qualquer ocasião.",
    sizes: ["37", "38", "39", "40", "41", "42"],
    colors: [
      {
        name: "Branco",
        colorClass: "bg-white",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
        ],
      },
      {
        name: "Bege",
        colorClass: "bg-yellow-100",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
        ],
      },
      {
        name: "Marrom",
        colorClass: "bg-amber-700",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tênis Caminhada Coco Flex",
    price: 179.90,
    description:
      "Tênis leve e confortável para caminhadas, com design elegante e tecido respirável.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      {
        name: "Cinza",
        colorClass: "bg-gray-500",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        ],
      },
      {
        name: "Rosa",
        colorClass: "bg-pink-300",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        ],
      },
      {
        name: "Preto",
        colorClass: "bg-black",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tênis Skate J'adore Pro",
    price: 219.90,
    description:
      "Tênis robusto para skate com sola antiderrapante e amortecimento reforçado.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    colors: [
      {
        name: "Preto com Vermelho",
        colorClass: "bg-red-700",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
        ],
      },
      {
        name: "Azul",
        colorClass: "bg-blue-900",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
        ],
      },
      {
        name: "Grafite",
        colorClass: "bg-neutral-700",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Tênis Chunky Dolce Shine",
    price: 249.90,
    description:
      "Tênis moderno com solado robusto, ideal para looks urbanos e cheios de atitude.",
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: [
      {
        name: "Bege com Rosa",
        colorClass: "bg-pink-300",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
        ],
      },
      {
        name: "Roxo",
        colorClass: "bg-purple-400",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
        ],
      },
      {
        name: "Verde",
        colorClass: "bg-green-500",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Tênis Floral Gucci Bloom",
    price: 269.90,
    description:
      "Tênis com estampa floral elegante, perfeito para compor looks delicados e fashionistas.",
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
    colors: [
      {
        name: "Branco Floral",
        colorClass: "bg-rose-200",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        ],
      },
      {
        name: "Lilás",
        colorClass: "bg-violet-300",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        ],
      },
      {
        name: "Azul Claro",
        colorClass: "bg-sky-300",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp",
        ],
      },
    ],
  },
];
