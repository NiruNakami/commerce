"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

import Product1 from "../../images/product-item/image-product-1-thumbnail.jpg";
import Product2 from "../../images/product-item/image-product-2-thumbnail.jpg";
import Product3 from "../../images/product-item/image-product-3-thumbnail.jpg";
import Product4 from "../../images/product-item/image-product-4-thumbnail.jpg";

import Product1a from "../../images/product-item/image-product-1.jpg";
import Product2a from "../../images/product-item/image-product-2.jpg";
import Product3a from "../../images/product-item/image-product-3.jpg";
import Product4a from "../../images/product-item/image-product-4.jpg";


import IconClose from "../../images/icon/icon-close.svg"
import IconNext from "../../images/icon/icon-next.svg"
import IconPrevious from "../../images/icon/icon-previous.svg"

interface ImageData {
    id: number;
    src: string | StaticImageData;
    wideSrc: string | StaticImageData;
    alt: string;
}

const images: ImageData[] = [
    {
        id: 1,
        src: Product1,
        wideSrc: Product1a,
        alt: "Product 1",
    },
    {
        id: 2,
        src: Product2,
        wideSrc: Product2a,
        alt: "Product 2",
    },
    {
        id: 3,
        src: Product3,
        wideSrc: Product3a,
        alt: "Product 3",
    },
    {
        id: 4,
        src: Product4,
        wideSrc: Product4a,
        alt: "Product 4",
    },
];

function ImageSlideshow() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [ProductImg, setProductImg] = useState<ImageData>(images[0])

    const openSlideImg = () => {
        setIsOpen(true)
    }
    const CloseSlideImg = () => {
        setIsOpen(false)
    }

    const Slideshow = () => {
        const CheckValue = images.findIndex((img) => img.id === ProductImg.id)
        const nextSlide = (CheckValue + 1) % images.length
        setProductImg(images[nextSlide])
        console.log(nextSlide)

    }
    const PreviousShow = () => {
        const CheckValue = images.findIndex((img) => img.id === ProductImg.id)
        const nextSlide = (CheckValue - 1 + images.length) % images.length
        setProductImg(images[nextSlide])
        console.log(nextSlide)
    }

    return (
        <div className="">
            {isOpen && (
                <div className=" fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ">
                    <div className=" relative ">

                        <div>
                            <button onClick={CloseSlideImg} className="  bg-black  w-8 h-8 p-4 " >
                                <Image src={IconClose} alt="IconClose" width={20} height={20} />
                            </button>
                            <div className="flex">
                                <button onClick={PreviousShow} className=" bg-white rounded-full left-[-6%] bottom-1/2 absolute w-12 h-12 p-4 ">
                                    <Image src={IconPrevious} alt="IconPreviousSlide" width={10} height={10} />
                                </button>
                                <div>
                                    <Image
                                        src={ProductImg.wideSrc}
                                        alt={ProductImg.alt}
                                        width={400}
                                        height={400} />
                                </div>
                                <button onClick={Slideshow} className=" bg-white rounded-full left-[95%] bottom-1/2 absolute  w-12 h-12 p-4 " >
                                    <Image src={IconNext} alt="IconNextSlideImg" width={10} height={10} />
                                </button>
                            </div>

                        </div>
                        <div className="flex justify-center space-x-4 mt-4">
                            {images.map((image) => (
                                <Image
                                    key={image.id}
                                    src={image.src}
                                    alt={image.alt}
                                    width={60}
                                    height={60}
                                    className={`cursor-pointer rounded-lg ${ProductImg.id === image.id
                                        ? "ring-4 ring-orange-500"
                                        : "opacity-60 hover:opacity-100"
                                        }`}
                                    onClick={() => setProductImg(image)}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            )}
            <div className=" flex flex-col">
                <button onClick={openSlideImg}>
                    <Image
                        src={ProductImg.wideSrc}
                        alt={ProductImg.alt}
                        width={400}
                        height={400} />
                </button>
                <div className="flex justify-center items-center space-x-4 mt-4">
                    {images.map((image) => (
                        <Image
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            width={60}
                            height={60}
                            className={`cursor-pointer rounded-lg ${ProductImg.id === image.id
                                ? "ring-4 ring-orange-500"
                                : "opacity-60 hover:opacity-100"
                                }`}
                            onClick={() => setProductImg(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageSlideshow;