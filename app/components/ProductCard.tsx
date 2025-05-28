"use client";
import { Product } from "@/src/types/Product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const [selectedImage] = useState(product.colors[0].images[0]);

    const router = useRouter()

    const handleClick = (product: Product) => {
        router.push(`/product/${product.id}`)
    };

    return (
        <div
            className="flex justify-center items-center p-8 my-2 sm:m-4 w-full sm:w-[20vw] bg-white hover:bg-sky-50 hover:cursor-pointer rounded-lg"
            onClick={() => handleClick(product)}
        >
            <div className="flex flex-col items-start">
                <div className="relative w-[200px] sm:w-[220px] h-auto aspect-[4/3]">
                    <Image
                        src={selectedImage}
                        alt="Imagem principal"
                        fill
                        className="rounded-lg"
                    />
                </div>

                <section>
                    <h1 className="font-bold text-lg mb-2">{product.name}</h1>
                    <p className="text-sm mb-2">{product.description}</p>
                    <h2 className="text-md font-semibold text-green-700">R$ {product.price}</h2>
                </section>
            </div>
        </div>
    );
}
