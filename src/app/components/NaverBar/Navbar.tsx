"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IconLogo from "../../images/logo/logo.svg";
import IconHamburger from "../../images/icon/icon-hamburger.svg";
import IconClose from "../../images/icon/icon-close.svg";
import IconCart from "../../images/icon/icon-cart.svg";
import UserImage from "../../images/user/image-avatar.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const add = () => {
    if ()
  }

  return (
    <nav className="relative container-Navbar bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto px-4 py-4 md:py-6">
        {/* Logo */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 container justify-between mx-auto px-4 py-4 md:py-6">
          <div className="flex space-x-8">
            <div className="flex items-center">
              <Image src={IconLogo} width={120} height={120} alt="Logo" loading="lazy" />
            </div>
            <ul className="flex space-x-8 text-lg font-medium text-gray-700">
              <li><Link href="/">Collections</Link></li>
              <li><Link href="/">Men</Link></li>
              <li><Link href="/">Women</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>

          <div className="flex items-center space-x-8">
            {/* Cart */}
            <button onClick={toggleCart} aria-label="Toggle Cart" className="relative">
              <Image src={IconCart} width={30} height={30} alt="Cart" />
              {isCartOpen && (
                <div className="absolute right-0 top-12 bg-white w-64 shadow-lg rounded-lg p-4">
                  <h2 className="text-lg font-bold">Cart</h2>
                  <p className="text-gray-500">Your cart is empty.</p>
                </div>
              )}
            </button>

            {/* User Profile */}
            <Image
              src={UserImage}
              width={40}
              height={40}
              alt="User Profile"
              className="rounded-full border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <Image
              src={isMenuOpen ? IconClose : IconHamburger}
              width={40}
              height={40}
              alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            />
          </button>
        </div>
      </div >

      {/* Mobile Navigation */}
      {
        isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium text-gray-700">
              <li><Link href="/">Collections</Link></li>
              <li><Link href="/">Men</Link></li>
              <li><Link href="/">Women</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>
        )
      }
    </nav >
  );
}

export default Navbar;