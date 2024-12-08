"use client";

import { useState } from "react";
import Navbar from "./components/NaverBar/Navbar";
import ProductImage from "./components/function/functionImageSlideshow";
import Image from "next/image";

// Icon
import IconPlus from "./images/icon/icon-plus.svg";
import IconMinus from "./images/icon/icon-minus.svg";
import IconCart from "./images/icon/icon-cart.svg";

interface ProductData {
  name: string;
  description: string;
  price: number;
  discount: number;
}

function Page() {
  const [valueItem, setValueItem] = useState<number>(1);
  const [date , setdate] = useState<ProductData[]>([
    
  ]);

  // Example product
  const product: ProductData = {
    name: "Fall Limited Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0,
    discount: 50,
  };

  // Increase quantity
  const increment = () => setValueItem((prev) => prev + 1);

  // Decrease quantity
  const decrement = () => valueItem > 1 && setValueItem((prev) => prev - 1);
  
  function addCart(e:ProductData) {
    if (date.length >= 1 ) {
      setValueItem(2);
    }
    const buy = product.price * valueItem;
    setdate(product[...product])
    
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        {/* Left: Product Image */}
        <ProductImage />

        {/* Right: Product Details */}
        <div className="max-w-lg">
          {/* Product Info */}
          <h2 className="text-orange-500 uppercase text-sm font-bold tracking-wide">
            Sneaker Company
          </h2>
          <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Pricing */}
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              <span className="bg-orange-200 text-orange-600 font-bold text-sm px-2 py-1 rounded">
                {product.discount}%
              </span>
            </div>
            <p className="text-gray-400 line-through">
              ${((product.price * 100) / (100 - product.discount)).toFixed(2)}
            </p>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="mt-6 flex items-center space-x-4">
            {/* Quantity Control */}
            <div className="flex items-center bg-gray-100 rounded-lg">
              <button
                onClick={decrement}
                className="px-4 py-2 text-gray-600 font-bold"
                aria-label="Decrease quantity"
              >
                <Image src={IconMinus} alt="Minus Icon" width={12} height={12} />
              </button>
              <span className="px-4 py-2 text-lg font-semibold">{valueItem}</span>
              <button
                onClick={increment}
                className="px-4 py-2 text-gray-600 font-bold"
                aria-label="Increase quantity"
              >
                <Image src={IconPlus} alt="Plus Icon" width={12} height={12} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-bold">
              <Image
                src={IconCart}
                alt="Cart Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
