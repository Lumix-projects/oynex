"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageToggle({ className }: { className?: string }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // تعديل اتجاه الصفحة
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(className)}>
        <Button variant="ghost">
          <Globe className="h-[1.2rem] w-[1.2rem] scale-100" />
          <span>{i18n.language.toUpperCase()}</span>
          <span className="sr-only">Language toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>AR</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
