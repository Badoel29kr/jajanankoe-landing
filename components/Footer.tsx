// components/Footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, UtensilsCrossed } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // Impor dari react-icons

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "TikTok", icon: FaTiktok, url: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-7 w-7" />
              <span className="text-xl font-bold">Jajanankoe</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Satu platform untuk jajanan lezat dan semua transaksi digital
              Anda.
            </p>
          </div>

          {/* Column 2 & 3: Links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Jelajahi
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#jajanan"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Menu Jajanan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#bayar"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Bayar Tagihan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tentang"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Tentang Kami
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Dukungan
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Kontak Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Ikuti Kami
            </h3>
            <div className="flex space-x-2 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jajanankoe. Seluruh Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
