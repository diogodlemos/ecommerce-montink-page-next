"use client";
import Header from "@/app/components/Header"
import { products } from "@/src/data/Products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import findCepToValidation from "@/app/services/cep/viaCepService";
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
    const [selectedSize, setSelectedSize] = useState<string | null>(null);



    useEffect(() => {
        if(!productId) return;
        const productInfo = localStorage.getItem(`products/${productId}`);
        if (!productInfo) return;

        const parsedProduct = JSON.parse(productInfo);
        const now = Date.now();

        const getValidValue = (key: string) => {
            const expiresAt = parsedProduct[`${key}_expiresAt`];
            if (expiresAt && now > expiresAt) {
                // Remove valor expirado
                delete parsedProduct[key];
                delete parsedProduct[`${key}_expiresAt`];
                return null;
            }
            return parsedProduct[key] ?? null;
        };

        const image = getValidValue('image');
        const size = getValidValue('size');
        const cep = getValidValue('cep');
        const address = getValidValue('address');

        if (image) setSelectedImage(image);
        if (size) setSelectedSize(size);
        if (cep) setCep(cep);
        if (address) setAddress(address);

        // Atualiza o localStorage com valores expirados removidos (opcional, mas recomendado)
        localStorage.setItem(`products/${productId}`, JSON.stringify(parsedProduct));
    }, [productId]);

    if (!product) return notFound();



    const setLocalStorageItem = (nameProperty: string, valueProperty: string | number | object | boolean) => {
        const now = new Date();
        const expiresAt = now.getTime() + 15 * 60 * 1000;

        const existing = localStorage.getItem(`products/${productId}`);
        const parsedProduct = existing ? JSON.parse(existing) : {};

        const newData = {
            ...parsedProduct,
            [nameProperty]: valueProperty,
            [`${nameProperty}_expiresAt`]: expiresAt,
        };

        localStorage.setItem(`products/${productId}`, JSON.stringify(newData));
    };


    const handleChangeCep = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        };

        setCep(value)
        setLocalStorageItem("cep", value)
    }

    const handleVerificationCep = async () => {
        if (cep) {
            const response = await findCepToValidation(cep);
            if (response) {
                setAddress(response.data);
                setLocalStorageItem("address", response.data)
            }
        }
    };

    const handleSelectSize = (event: React.MouseEvent<HTMLButtonElement>) => {
        const size = event.currentTarget.innerText;
        setSelectedSize(size);
        setLocalStorageItem("size", size)
    };


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

                        <h2>Cor do produto:</h2>
                        <div className="flex gap-2 mb-4">
                            {product.colors.flatMap(({ images }) => images).map((img, index) => (
                                <button key={index} onClick={() => { setSelectedImage(img); setLocalStorageItem("image", img) }}>
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
                                    className={`mr-2 w-40 h-10 bg-sky-50 rounded-full border rounded-md ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'} hover:bg-blue-600 hover:text-white transition`}
                                    key={index}
                                    onClick={handleSelectSize}>{size}
                                </button>)}
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
                                className="w-[150px] p-2 mt-2 mb-2"
                                value={cep}
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