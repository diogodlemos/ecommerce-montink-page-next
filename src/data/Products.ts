import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    price: 9.99,
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    sizes: [], // sem tamanhos info, pode usar ['Único'] ou []
    colors: [
      {
        name: "default",
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Calvin Klein CK One",
    price: 49.99,
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    sizes: ["50ml", "75ml", "100ml", "200ml"],
    colors: [
      {
        name: "default", // não há variações de cor nesse caso
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Chanel Coco Noir Eau De",
    price: 129.99,
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    sizes: ["100ml", "200ml"],
    colors: [
      {
        name: "Padrão",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Dior J'adore",
    price: 89.99,
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    sizes: ["50ml", "75ml", "100ml", "200ml"],
    colors: [
      {
        name: "Padrão",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Dolce Shine Eau de",
    price: 69.99,
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    sizes: ["50ml", "75ml", "100ml", "200ml"],
    colors: [
      {
        name: "Padrão",
        images: [
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
          "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp",
        ],
      },
    ],
  },
  {
  id: 6,
  name: "Gucci Bloom Eau de",
  price: 79.99,
  description:
    "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
  sizes: ["50ml", "75ml", "100ml", "200ml"],
  colors: [
    {
      name: "Único",
      images: [
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
      ]
    }
  ]
}];
