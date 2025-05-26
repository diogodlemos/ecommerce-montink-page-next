import Image from "next/image";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

type Props = {
    showSearchBar: boolean
}
const Header = ({ showSearchBar }: Props) => {
    return (
        <div>
            <header className="w-full bg-sky-500 h-[120] flex justify-between items-center p-4">
                <div className="flex">
                    <Image
                        src="/logo.png"
                        alt="Imagem do Produto"
                        width={50}
                        height={50}
                        className="rounded-full pr-4"
                    />
                    <h1 className="text-white text-2xl font-poppins font-normal">E-commerce Montink</h1>
                </div>
                <div className="flex justify-center items-center">
                    {showSearchBar && <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Buscar produto..."
                            className="w-full pl-2 mr-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>}
                    <button aria-label="Carrinho de compras" className="relative">
                        <FaShoppingCart className="text-2xl text-white m-5" />
                    </button>
                </div>
            </header>
        </div>
    )
};

export default Header;