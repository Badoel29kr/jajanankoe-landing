// components/FinalCTA.tsx
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

export default function FinalCTA() {
  const ctaLink = createWhatsAppLink(
    "Halo Jajanankoe, saya siap menikmati kemudahan dan kelezatan dari layanan Anda!"
  );

  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-lg p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Siap Menikmati Kemudahan?
          </h2>
          <p className="mt-4 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk memesan jajanan favorit Anda atau untuk
            bertanya tentang layanan pembayaran. Tim kami siap membantu!
          </p>
          <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              Chat via WhatsApp Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
