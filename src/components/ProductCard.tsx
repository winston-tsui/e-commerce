import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

// Cost of products are stored as cents in DB so convert to dollars.
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </Link>
  );
}
