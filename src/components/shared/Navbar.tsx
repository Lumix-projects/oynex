import { Barcode, Home, Send, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: User },
    { name: "Products", href: "/products", icon: Barcode },
  ];

  return (
    <header className="border-b">
      <nav className="container mx-auto flex justify-between p-3">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="company logo" width={25} height={25} />
          <h6 className="font-bold text-lg">OynexPharma</h6>
        </Link>

        {/* Desktop Links */}
        <ul className="flex gap-3 items-center">
          {navLinks.map((link, index) => (
            <Button key={index} asChild variant={"ghost"}>
              <li>
                <link.icon className="h-5 w-5 md:hidden" />
                <Link href={link.href}>{link.name}</Link>
              </li>
            </Button>
          ))}
          <Separator orientation="vertical" />
          <ModeToggle />
          <LanguageToggle />
          <Button
            asChild
            className="bg-main hover:bg-main-hover rounded-full hover:gap-3"
            size="lg"
          >
            <a href="#contact">
              <Send /> Contact Us
            </a>
          </Button>
        </ul>
      </nav>
    </header>
  );
}
