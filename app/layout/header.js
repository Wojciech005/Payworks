"use client";

import { FaBell } from "react-icons/fa6";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";

import MobileNavigation from "./mobile-navigation";
import ProfileNavigation from "./profile-navigation";

export default function Header() {
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  function onShowProfileMenu() {
    setProfileMenu(!profileMenu);
  }
  function handleKeyUp(event) {
    if (event.key === "Escape") {
      setProfileMenu(false);
    }
  }

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }
  function handleCloseMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <header className="w-full relative flex justify-between bg-[#1b493d] px-5 lg:px-12 py-4" onKeyUp={handleKeyUp}>
        <div className="flex">
          <button className="block md:hidden" onClick={handleMobileMenu}>
            <RxHamburgerMenu className="text-white text-3xl me-4" />
          </button>
          <h5 className="bg-white p-2 rounded shadow-xl">
            <Image
              src="/Payworks-logo.png"
              width={120}
              height={120}
              alt="Payworks - company logo."
            />
          </h5>
        </div>
        <div className="flex items-center">
          <div className="me-4">
            <PiMagnifyingGlass className="text-2xl text-white/75  cursor-pointer" />
          </div>
          <div className="me-4">
            <FaBell className="text-2xl text-white/75 cursor-pointer" />
          </div>
          <button className="w-10 h-10 relative bg-gray-400/50  rounded-xl flex items-center justify-center" onClick={onShowProfileMenu}>
            <span className="text-white">WD</span>
          </button>
          <ProfileNavigation profileMenu={`absolute top-16 right-10 lg:right-20 bg-white rounded w-52  md:w-80 shadow-xl ${profileMenu ? "block" : "hidden"}`}/>
        </div>
      </header>
      <MobileNavigation mobileMenuOverlay={mobileMenu && "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-20"}
        onClick={handleCloseMobileMenu} mobileMenu={mobileMenu ? " fixed left-0 top-0  w-60 h-screen bg-white p-5 ease-in duration-500 shadow"
            : "fixed left-[-100%] top-0 p-5 ease-in duration-500 h-screen"} handleClick={handleCloseMobileMenu}/>
    </>
  );
}

// bg-[#451B49]
