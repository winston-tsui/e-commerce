import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  // Render cards for each item in a card from DaisyUI
  return (
    <div>
      <ProductCard product={products[0]} />
    </div>
  );
}
