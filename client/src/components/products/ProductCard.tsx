import { IProduct } from "@/store/useProductStore";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => (
  <Card className="bg-[#252525] text-white">
    <CardContent className="p-0">
      <img 
        src={product.images[Math.floor(Math.random() * 5)]} 
        alt={product.title} 
        className="w-full mx-auto"
      />
      <div className="bg-black p-5 text-left">
        <h3 className="text-2xl ml-[-5px]">{product.title}</h3>
        <ul className="list-disc list-inside text-[#999999] my-5 ml-4">
          <li>{product.specifications.processor}</li>
          <li>{product.specifications.screen} inch Full HD</li>
          <li>{product.specifications.force}</li>
          <li>{product.specifications.windows}</li>
          <li>{product.specifications.force}</li>
        </ul>

        <Link 
          href={`/productDetails/${product._id}`}
          className="text-[#44d62c] hover:underline"
        >
          View Details
        </Link>

        <div className="mt-2">
          <p>US$ {product.discountedPrice}</p>
          <p className="line-through text-[#999999]">
            US$ {product.mrp}
          </p>
        </div>

        <Button 
          className="bg-[#44d62c] hover:bg-[#44d62c]/90 mt-5 w-[45%]"
        >
          Add To Cart
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default ProductCard;