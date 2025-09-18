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
    <section
      className="relative w-full py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Ini adalah lapisan overlay gradien */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Konten Anda, pastikan posisinya di atas overlay */}
      <div className="relative container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Kemudahan dalam Setiap Gigitan dan Transaksi.
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-white/90 md:text-xl drop-shadow">
          Nikmati jajanan tradisional favoritmu sambil menyelesaikan semua
          pembayaran tagihan bulanan.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={linkJajanan} target="_blank">
            <Button className="bg-primary text-white hover:bg-secondary rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform">
              Lihat Menu Jajanan
            </Button>
          </Link>
          <Link href={linkBayar} target="_blank">
            <Button className="bg-white text-primary hover:bg-accent px-8 py-3 rounded-lg text-lg font-semibold border-2 border-primary shadow-lg transform hover:scale-105 transition-transform">
              Mulai Bayar Tagihan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
