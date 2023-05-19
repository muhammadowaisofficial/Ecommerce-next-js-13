// 'use client';

import Product from "@/components/Product";

// import { log } from "console";
// import { useState } from "react";

export default async function Home() {
  // const [products, setProducts] = useState([])
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  // console.log(products);

  return (
    <main className="min-h-screen max-w-7xl mx-auto p-8 xl:p-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center uppercase">Deals of the Day</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
        </div>
      </section>
    </main>
  )
};
