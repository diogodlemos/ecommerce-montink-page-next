import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Tênis ASICS Gel-Excite 10 Masculino",
    price: 199.90,
    description:
      "Tênis ideal para corridas e atividades físicas, com solado em borracha antiderrapante e cabedal respirável.",
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: [
      {
        name: "Preto",
        colorClass: "bg-black",
        images: [
          "/assets/aiscsPreto.png",
        ],
      },
      {
        name: "branco",
        colorClass: "bg-white",
        images: [
          "/assets/aiscsBranco.png",
        ],
      },
      {
        name: "Azul",
        colorClass: "bg-blue-700",
        images: [
          "/assets/aiscsAzul.png",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tênis Nike Casual One",
    price: 159.90,
    description:
      "Tênis casual com design moderno, ideal para o dia a dia. Confortável e versátil para qualquer ocasião.",
    sizes: ["37", "38", "39", "40", "41", "42"],
    colors: [
      {
        name: "Branco",
        colorClass: "bg-white",
        images: [
          "/assets/nikeBranco.png",
        ],
      },
      {
        name: "Bege",
        colorClass: "bg-yellow-100",
        images: [
          "/assets/nikeBege.png",
        ],
      },
      {
        name: "Marrom",
        colorClass: "bg-amber-700",
        images: [
          "/assets/nikeMarrom.png",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tênis Mizuno Cool Ride 3 Feminino",
    price: 179.90,
    description:
      "Tênis leve e confortável para caminhadas, com design elegante e tecido respirável.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      {
        name: "Cinza",
        colorClass: "bg-gray-500",
        images: [
          "/assets/mizunoCinza.png",
        ],
      },
      {
        name: "Rosa",
        colorClass: "bg-pink-300",
        images: [
          "/assets/mizunoRosa.png",
        ],
      },
      {
        name: "Preto",
        colorClass: "bg-black",
        images: [
          "/assets/mizunoPreto.png",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tênis Skate QIX Pro",
    price: 219.90,
    description:
      "Tênis robusto para skate com sola antiderrapante e amortecimento reforçado.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    colors: [
      {
        name: "Preto com Vermelho",
        colorClass: "bg-red-700",
        images: [
          "/assets/qixPreto.png",
        ],
      },
      {
        name: "Azul",
        colorClass: "bg-blue-900",
        images: [
          "/assets/qixAzul.png",
        ],
      },
      {
        name: "Grafite",
        colorClass: "bg-neutral-700",
        images: [
          "/assets/qixGrafite.png",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Tênis Olympikus Corre Max - Unissex",
    price: 249.90,
    description:
      "O Tênis Olympikus Corre Max foi criado para quem quer correr com o máximo de conforto e performance. Com a tecnologia de amortecimento ELEVA PRO, ele oferece uma resposta rápida e eficiente, sem abrir mão da durabilidade. O cabedal em Hypersox garante um ajuste perfeito, leve e flexível",
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: [
      {
        name: "Amarelo",
        colorClass: "bg-yellow-300",
        images: [
          "/assets/olympikusAmarelo.jpg",
        ],
      },
      {
        name: "Vermelho",
        colorClass: "bg-red-500",
        images: [
          "/assets/olympikusVermelho.png",
        ],
      },
      {
        name: "Verde",
        colorClass: "bg-green-500",
        images: [
          "/assets/olympikusVerde.jpg",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Chuteira Society adidas Deportivo III Adulto",
    price: 269.90,
    description:
      "Feita para garantir conforto e estabilidade em campo, ela possui cabedal resistente que melhora o contato com a bola e solado com travas específicas para society",
    sizes: ["35", "36", "37", "38", "39", "40", "41"],
    colors: [
      {
        name: "Lilás",
        colorClass: "bg-violet-300",
        images: [
          "/assets/adidasLilas.png",
        ],
      },
      {
        name: "Branco Floral",
        colorClass: "bg-rose-200",
        images: [
          "/assets/adidasBranco.png",
        ],
      },      
      {
        name: "Azul Claro",
        colorClass: "bg-sky-300",
        images: [
          "/assets/adidasAzul.png",
        ],
      },
    ],
  },
];
