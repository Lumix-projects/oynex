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
import { useLocalization } from "@/hooks/useLocalization";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, switchLocale } = useLocalization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(className)}>
        <Button variant="ghost">
          <Globe className="h-[1.2rem] w-[1.2rem] scale-100" />
          <span>{locale.toUpperCase()}</span>
          <span className="sr-only">Language toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("en")}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("ar")}>AR</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
