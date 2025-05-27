"use client";
import ProdutoCard from './components/ProductCard';
import Header from './components/Header';
import { products } from '@/src/data/Products';
import { Product } from '@/src/types/Product';
import { useEffect, useState } from 'react';

export default function Home() {

  const [productsItems, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(products);
  }, []);

  const onChangeFilterText = (text: string) => {
    console.log("Texto da pesquisa no pai:", text);
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(text.toLowerCase()));
    setProducts(filteredProducts);
  };

  return (
    <main>
      <Header showSearchBar={true} onChangeFilterText={onChangeFilterText}/>
      <div className='flex flex-col justify-center items-start m-8'>
        <div className='flex flex-col sm:flex-row m-4 w-full flex-wrap'>
          {productsItems.map((product: Product) => (
            <ProdutoCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
