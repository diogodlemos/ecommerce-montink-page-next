"use client";
import { Product } from "@/src/types/Product";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const [selectedImage, setSelectedImage] = useState(product.colors[0].images[0]);

    const router = useRouter()

    const handleClick = (product: Product) => {
        console.log("clicou");
        
        router.push(`/product/${product.id}`)
    };

    return (
        <div
            className="p-8 m-4 w-[20vw] bg-white hover:bg-sky-50 hover:cursor-pointer rounded-lg"
            onClick={() => handleClick(product)}
        >
            <div className="flex flex-col items-start">
                <div className="relative w-[10vw] h-auto aspect-[4/3]">
                    <Image
                        src={selectedImage}
                        alt="Imagem principal"
                        fill
                        className="object-contain rounded-lg"
                    />
                </div>

                {/* <div className="flex gap-2 mb-4">
                    {product.colors[0].images.map((img, index) => (
                        <button key={index} onClick={() => setSelectedImage(img)}>
                            <Image
                                src={img}
                                alt={`Miniatura ${index + 1}`}
                                width={60}
                                height={60}
                                className={`border rounded-md ${selectedImage === img ? "border-blue-500" : "border-gray-300"
                                    }`}
                            />
                        </button>
                    ))}
                </div> */}

                <section>
                    <h1 className="font-bold text-lg mb-2">{product.name}</h1>
                    <p className="text-sm mb-2">{product.description}</p>
                    <h2 className="text-md font-semibold text-green-700">R$ {product.price}</h2>
                </section>
            </div>
        </div>
    );
}
