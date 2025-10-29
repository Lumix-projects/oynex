import { Home, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
  ];

  return (
    <header className="border-b">
      <nav className="container mx-auto flex justify-between p-3">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="company logo" width={25} height={25} />
          <h6 className="font-bold text-lg">OynexPharma</h6>
        </Link>

        {/* Desktop Links */}
        <div>
          {navLinks.map((link, index) => (
            <Button key={index} asChild variant="link">
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
