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

import Link from "next/link";

function Menu() {
  return (
    <div className="flex justify-between items-center w-100vw px-4 py-2 rounded-lg  backdrop-blur-2xl bg-white/30">
      <IoMenu
        style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
        className="block sm:hidden"
      />
      <NavigationMenu className="w-full   text-white hidden sm:block">
        <NavigationMenuList className="flex justify-center gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/docs">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/blog">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">Project</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">Project</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">Project</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <FaGithub
        style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
        className=""
      />
    </div>
  );
}
export default Menu;
