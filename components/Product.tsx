import Link from "next/link";
import ProductImage from "./ProductImage";

type Props = {
  product: Product;
};

function Product({ product }: Props) {
  return (
    <>
    <Link
      prefetch={false}
      className="h-96 p-6 flex flex-col rounded border group hover:scale-105 transition-transform ease-out duration-200"
      href={`/products/${product.id}`}
    >
      <div className="flex-1 relative max-h-75">
        <ProductImage product={product} fill />
      </div>

      <div className="font-semibold flex justify-between items-center mb-1 mt-4">
        <h2 className="w-44 truncate font-semibold">{product.title}</h2>
        <p className="font-bold text-[20px]">${product.price}</p>
      </div>
      
      <p className="italic text-xs w-64 line-clamp-2 text-gray-400">
        {product.description}
      </p>
    </Link>
    </>
  );
}

export default Product;
