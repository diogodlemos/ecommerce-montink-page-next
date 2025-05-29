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
            className="flex justify-center items-center p-8 my-2 mx-4 sm:m-4 w-[93vw] sm:w-[20vw] bg-white hover:bg-sky-50 hover:cursor-pointer rounded-lg"
            onClick={() => handleClick(product)}
        >
            <div className="flex flex-col items-start">
                <div className="relative w-[200px] sm:w-[220px] h-auto aspect-[4/3]">
                    <Image
                        src={selectedImage}
                        alt="Imagem principal"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-lg"
                        priority
                        quality={75}
                    />
                </div>

                <section>
                    <h1 className="font-bold text-2xl my-4">{product.name}</h1>
                    <p className="text-sm mb-2 text-xl my-2">{product.description}</p>
                    <h2 className="text-md font-semibold text-green-700 pb-4 text-2xl">R$ {Number(product.price).toFixed(2)}</h2>
                </section>
            </div>
        </div>
    );
}
