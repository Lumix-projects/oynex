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

export function LanguageToggle({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(className)}>
        <Button variant="ghost">
          <Globe className="h-[1.2rem] w-[1.2rem] scale-100" />
          <span>EN</span>
          <span className="sr-only">Language toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>EN</DropdownMenuItem>
        <DropdownMenuItem>AR</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
