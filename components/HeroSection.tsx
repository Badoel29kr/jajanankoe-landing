// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

export default function HeroSection() {
  const linkJajanan = createWhatsAppLink(
    "Halo Jajanankoe, saya tertarik untuk melihat menu jajanan yang tersedia."
  );
  const linkBayar = createWhatsAppLink(
    "Halo Jajanankoe, saya ingin melakukan pembayaran tagihan."
  );

  return (
    <section className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Kemudahan dalam Setiap Gigitan dan Transaksi.
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Nikmati jajanan tradisional favoritmu sambil menyelesaikan semua
          pembayaran tagihan bulanan. Cepat, lezat, dan praktis dalam satu
          platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={linkJajanan} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Lihat Menu Jajanan</Button>
          </Link>
          <Link href={linkBayar} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              Mulai Bayar Tagihan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
