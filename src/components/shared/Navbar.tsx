"use client";

import { Barcode, Home, Menu, Send, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  return (
    <header className="border-b fixed w-full top-0 shadow bg-background z-50">
      <nav className="container mx-auto flex justify-between p-3">
        <NavbarLogo />

        {/* Desktop Links */}
        <NavbarLinks className="hidden lg:flex" />

        {/* Mobile Links */}
        <div className="lg:hidden">
          <Sheet>
            {/* Sheet Trigger */}
            <SheetTrigger>
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
        </div>
      </nav>
    </header>
  );
}

function NavbarLogo() {
  const { t, i18n } = useTranslation("common");

  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/logo.png" alt="company logo" width={25} height={25} />
      <h6 className="font-bold sm:text-lg">{t("navbar.logo")}</h6>
    </Link>
  );
}

function NavbarLinks({ className }: { className?: string }) {
  const { t, i18n } = useTranslation("common");
  const navLinks = [
    { name: t("navbar.home"), href: "/", icon: Home },
    { name: t("navbar.about"), href: "/about", icon: User },
    { name: t("navbar.products"), href: "/products", icon: Barcode },
  ];

  return (
    <div
      className={cn(
        `gap-3 items-center ${i18n.language === "ar" ? "rtl" : "ltr"}`,
        className
      )}
    >
      {navLinks.map((link, index) => (
        <Button
          key={index}
          asChild
          variant={"ghost"}
          className="w-full justify-start lg:w-fit"
        >
          <Link href={link.href}>
            <link.icon className="h-5 w-5 lg:hidden" />
            {link.name}
          </Link>
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
            <Send /> {t("navbar.contact")}
          </a>
        </Button>
      </div>
    </div>
  );
}
