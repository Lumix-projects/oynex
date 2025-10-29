import { Barcode, Home, Menu, Send, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 shadow bg-background z-50">
      <nav className="container mx-auto flex justify-between p-3">
        <NavbarLogo />

        {/* Desktop Links */}
        <NavbarLinks className="hidden lg:flex" />

        {/* Mobile Links */}
        <Sheet>
          {/* Sheet Trigger */}
          <SheetTrigger className="lg:hidden">
            <Button variant={"outline"} className="text-primary">
              <Menu />
            </Button>
          </SheetTrigger>

          {/* Sheet Content */}
          <SheetContent side="top">
            <SheetHeader className="pb-0 flex-row justify-between pr-10">
              <NavbarLogo />
              <div className="space-x-1">
                <ModeToggle />
                <LanguageToggle />
              </div>
            </SheetHeader>
            <NavbarLinks className="flex flex-col items-start lg:hidden p-3 border-t" />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function NavbarLogo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/logo.png" alt="company logo" width={25} height={25} />
      <h6 className="font-bold text-lg">Oynex Pharma</h6>
    </Link>
  );
}

function NavbarLinks({ className }: { className?: string }) {
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: User },
    { name: "Products", href: "/products", icon: Barcode },
  ];
  return (
    <ul className={cn("gap-3 items-center", className)}>
      {navLinks.map((link, index) => (
        <Button
          key={index}
          asChild
          variant={"ghost"}
          className="w-full justify-start lg:w-fit"
        >
          <li>
            <link.icon className="h-5 w-5 lg:hidden" />
            <Link href={link.href}>{link.name}</Link>
          </li>
        </Button>
      ))}

      {/* Large Screen Separator */}
      <Separator className="hidden lg:block" orientation="vertical" />

      {/* Navbar Buttons */}
      <div className="space-x-3 w-full lg:w-fit">
        <ModeToggle className="hidden lg:inline-flex" />
        <LanguageToggle className="hidden lg:inline-flex" />
        <Button
          asChild
          variant="main"
          className="hover:gap-3 w-full lg:w-fit"
          size="lg"
        >
          <a href="#contact">
            <Send /> Contact Us
          </a>
        </Button>
      </div>
    </ul>
  );
}
