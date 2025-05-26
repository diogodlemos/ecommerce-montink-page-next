"use client";
import ProdutoCard from './components/ProductCard';
import Header from './components/Header';
import { products } from '@/src/data/Products';
import { Product } from '@/src/types/Product';

export default function Home() {
  return (
    <main>
      <Header showSearchBar={true} />
      <div className='flex flex-col justify-center items-start m-8'>
        <div className='flex flex-col sm:flex-row m-4 w-full flex-wrap'>
          {products.map((product: Product) => (
            <ProdutoCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
