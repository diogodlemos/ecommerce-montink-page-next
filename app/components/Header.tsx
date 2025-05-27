import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  showSearchBar: boolean;
  onChangeFilterText?: (text: string) => void;
};

const Header = ({ showSearchBar, onChangeFilterText }: Props) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
    if (onChangeFilterText) {      
      onChangeFilterText(event.target.value);
    }
  };

  return (
    <div>
      <header className="w-full bg-sky-500 h-[80px] sm:h-[120px] flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image
            src="/logo.png"
            alt="Imagem do Produto"
            width={50}
            height={50}
            className="rounded-full pr-4"
          />
          <h1 className="text-white text-xl sm:text-2xl font-poppins font-normal">
            E-commerce Montink
          </h1>
        </div>
        <div className="hidden sm:flex flex-row justify-center items-center w-full sm:w-auto">
          {showSearchBar && (
            <div className="relative w-full max-w-md sm:mr-4">
              <input
                type="text"
                placeholder="Buscar produto..."
                className="w-full pl-2 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSearchChange}
              />
            </div>
          )}
          <button
            aria-label="Carrinho de compras"
            className="relative flex justify-center items-center"
          >
            <FaShoppingCart className="text-2xl text-white m-5" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
