"use client"

import Image, { StaticImageData } from "next/image";
import Navbar from "./components/NaverBar/Navbar";
import { lazy, useState } from "react";
import IconCart from "./images/icon/icon-cart.svg";
import productImage from "./images/product-item/image-product-1-thumbnail.jpg";

interface Product {
  id: number;
  name: string;
  Description: string;
  price: number;
  image: string | StaticImageData;
  quantity: number;
}

export default function Home() {


  const [cart, setCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const product: Product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    Description: "These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125,
    image: productImage, // Replace with your image path
    quantity: 0, // Initialize quantity for product
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <section className="left md:w-1/2 p-4">
            <div className="image-container bg-gray-100 h-64">
              <Image src={product.image} alt={product.name} width={400} height={400} className=" rounded-lg" />
            </div>
          </section>

          {/* Right Section */}
          <section className="right md:w-1/2 p-4">
            <div>
              <h3 className="text-gray-500 text-sm uppercase tracking-wide">
                Sneaker Company~
              </h3>
            </div>
            <div className="product-details my-4">
              <h1 className="text-3xl font-bold">Fall Limited Sneakers</h1>
              <p className="text-gray-600 my-2">
                  {product.Description}
              </p>
            </div>
            <div className="pricing mb-4">
              <div className="flex items-center">
                <p className="text-2xl font-bold mr-4">$125.00</p>
                <span className="bg-orange-200 text-orange-600 font-bold text-sm px-2 py-1 rounded">
                  50%
                </span>
              </div>
              <p className="text-gray-400 line-through">$250.00</p>
            </div>


            <div className="flex justify-around">
              <div className="quantity-control flex items-center space-x-4 mb-4 bg-gray-400 h-12">
                {/* Decrement Button */}
                <button
                  onClick={decrement}
                  className="flex items-center justify-center w-10 h-10  text-xl font-bold"
                  aria-label="Decrease quantity"
                >
                  -
                </button>

                {/* Quantity Display */}
                <span className="text-lg font-semibold">{quantity}</span>

                {/* Increment Button */}
                <button
                  onClick={increment}
                  className="flex items-center justify-center w-10 h-10  text-xl font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="add-to-cart">
                <button className="w-full h-12 bg-orange-500 text-white py-3 rounded flex items-center justify-center">
                  <span className="material-icons-outlined mr-2">
                    <Image src={IconCart} width={30} height={30} alt="Logo" loading="lazy" />
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
