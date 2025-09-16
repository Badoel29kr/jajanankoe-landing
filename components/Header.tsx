// components/Header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, UtensilsCrossed } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "#jajanan", label: "Jajanan" },
  { href: "#bayar", label: "Bayar Tagihan" },
  { href: "#tentang", label: "Tentang Kami" },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const ctaLink = createWhatsAppLink(
    "Halo Jajanankoe, saya ingin bertransaksi."
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <UtensilsCrossed className="h-6 w-6" />
          <span className="font-bold">Jajanankoe</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block"
          >
            <Button>Mulai Transaksi</Button>
          </Link>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <UtensilsCrossed className="h-6 w-6" />
                  <span className="font-bold">Jajanankoe</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="py-2 text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Mulai Transaksi</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
