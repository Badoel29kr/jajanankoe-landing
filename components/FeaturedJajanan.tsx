// components/FeaturedJajanan.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/utils";

// Contoh data, ganti dengan data Anda
const jajananItems = [
  {
    name: "Tape Singkong Mentega",
    price: "Rp 12.000",
    image: "/images/tape-singkong mentega.jpg",
  },
  {
    name: "Bebek Ungkep",
    price: "Rp 110.000",
    image: "/images/bebek pawon ayu.jpg",
  },
  {
    name: "Manggleng",
    price: "Rp 27.000",
    image: "/images/manggleng.jpg",
  },
  {
    name: "Sale Pisang Ambon",
    price: "Rp 42.000",
    image: "/images/sale pisang ambon.jpg",
  },
];

export default function FeaturedJajanan() {
  return (
    <section id="jajanan" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Menu Jajanan Terlaris</h2>
        <p className="text-muted-foreground mb-12">
          Paling banyak dicari dan dinikmati pelanggan.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jajananItems.map((item) => {
            const ctaLink = createWhatsAppLink(
              `Halo Jajanankoe, saya mau pesan ${item.name}.`
            );
            return (
              <Card key={item.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="object-cover h-48 w-full"
                  />
                </CardHeader>
                <CardContent className="p-4 text-left">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-primary font-bold">{item.price}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full">Pesan via WhatsApp</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
