"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { IoMenu } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

import Link from "next/link";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-2 sm:px-4 py-2 rounded-lg backdrop-blur-2xl bg-white/30">
      <IoMenu
        style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
        className="block sm:hidden"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="absolute top-12 left-2 right-2 bg-white/70 backdrop-blur-2xl rounded-lg p-4 z-50 sm:hidden">
          <NavigationMenu className="w-full text-black">
            <NavigationMenuList className="flex justify-center gap-3 sm:gap-5">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#hero">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#projects">Project</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#experiance">Experince</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#testimonials">Testimonials</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}

      <NavigationMenu className="w-full text-white hidden sm:block">
        <NavigationMenuList className="flex justify-center gap-3 sm:gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#hero">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#projects">Project</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#experiance">Experince</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#testimonials">Testimonials</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link
        href="https://github.com/nurezf"
        target="_blank"
        aria-label="GitHub"
      >
        <FaGithub
          style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
          className=""
        />
      </Link>
    </div>
  );
}
export default Menu;
