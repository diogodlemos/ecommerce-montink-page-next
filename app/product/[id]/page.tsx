"use client";
import Header from "@/app/components/Header"
import { products } from "@/src/data/Products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useState } from "react";

type Params = {
    params: Promise<{ id: string }>
};

const ProductDetail = ({ params }: Params) => {

    const { id } = use(params);
    const productId = Number(id);
    const product = products.find(p => p.id === productId);
    const initialImage = product?.colors[0].images[0] || "";
    const [selectedImage, setSelectedImage] = useState(initialImage);
    
    if (!product) return notFound();

    return (
        <div>
            <Header showSearchBar={false}/>
            <div className=" flex m-25">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative w-[35vw] h-auto aspect-[4/3]">
                            <Image
                                src={selectedImage}
                                alt="Imagem principal"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>

                        <div className="flex gap-2 mb-4">
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
                        </div>
                    </div>

                    <section className="w-[35vw]">
                        <h1 className="font-bold text-lg mb-2">{product.name}</h1>
                        <p className="text-sm mb-2">{product.description}</p>
                        <div className="flex flex-row justify-center items-center ">
                            {product.sizes
                                .map((size, index) => <button
                                    className="mr-2 w-40 h-10 bg-sky-50 rounded-full"
                                    key={index}>{size}
                                </button>)}
                        </div>
                        <h2 className="text-md font-semibold text-green-700">R$ {product.price}</h2>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;