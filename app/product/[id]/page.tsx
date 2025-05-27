"use client";
import Header from "@/app/components/Header"
import { products } from "@/src/data/Products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import viaCepService from "@/app/services/cep/viaCepService";
import { Address } from '@/src/types/Address';


type Params = {
    params: Promise<{ id: string }>
};

const ProductDetail = ({ params }: Params) => {

    const { id } = use(params);
    const productId = Number(id);
    const product = products.find(p => p.id === productId);
    const initialImage = product?.colors[0].images[0] || "";
    const [selectedImage, setSelectedImage] = useState(initialImage);
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState<Address | null>(null)

    if (!product) return notFound();

    const handleChangeColor = (images: string[]) => {
        console.log(images);
        setSelectedImage(images[0])
    }

    const handleChangeCep = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        };

        setCep(value)
    }

    const handleVerificationCep = async () => {
        console.log("cep", cep);
        const response = cep && await viaCepService.findCepToValidation(cep);
        response && setAddress(response.data)
    }

    return (
        <div>
            <Header showSearchBar={false} />
            <div className="flex m-[25px] bg-white rounded-lg">
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative sm:w-[35vw] w-[300px] h-auto aspect-[4/3]">
                            <Image
                                src={selectedImage}
                                alt="Imagem principal"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>

                        <div className="flex gap-2 mb-4">
                            {product.colors.flatMap(({ images }) => images).map((img, index) => (
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

                    <section className="w-[200px] sm:w-[35vw]">
                        <h1 className="font-bold text-lg mb-2">{product.name}</h1>
                        <p className="text-sm mb-2">{product.description}</p>
                        <div className="flex flex-row justify-center items-center ">
                            {product.sizes
                                .map((size, index) => <button
                                    className="mr-2 w-40 h-10 bg-sky-50 rounded-full"
                                    key={index}>{size}
                                </button>)}
                        </div>
                        <div className="flex">
                            {product.colors.map(({ colorClass, images }, index) => {
                                return <div key={index} onClick={() => handleChangeColor(images)} className={`${colorClass} w-8 h-8 border-solid border-2 border-gray-700 rounded-full m-2`} />

                            })}
                        </div>
                        <div className="flex flex-col mb-2 mt-2">
                            <label htmlFor="cep">CEP:</label>
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                placeholder="00000-000"
                                pattern="\d{5}-?\d{3}"
                                maxLength={9}
                                required
                                className="w-[150px] p-2 mt-2"
                                onChange={handleChangeCep}
                            />
                            <button
                                onClick={handleVerificationCep}
                                className="bg-blue-600 text-white px-4 py-2 w-[150px] rounded hover:bg-blue-700 transition"
                            >
                                Verificar CEP
                            </button>
                            <div className="w-full flex flex-col text-xs text-blue-950 font-bold font-poppins mt-2 mb-2">
                                <p>{`${address && address.logradouro ? address.logradouro : ''}`}</p>
                                <p>{`${address && address.bairro ? address.bairro : ''}`}</p>
                                <p>{`${address && address.localidade ? address.localidade : ''}`}</p>
                                <p>{`${address && address.uf ? address.uf : ''}`}</p>
                            </div>

                        </div>
                        <h2 className="text-md font-semibold text-green-700 pb-4">R$ {product.price}</h2>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;