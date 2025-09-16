// components/PillarsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Wallet } from "lucide-react";

export default function PillarsSection() {
  return (
    <section id="tentang" className="w-full py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Satu Tempat untuk Semua Kebutuhan Anda
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Utensils className="h-10 w-10 text-primary" />
              <CardTitle>Cita Rasa Juara</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dari kue basah hingga gorengan renyah, temukan kembali rasa
                otentik yang dirindukan. Dibuat dari bahan-bahan pilihan setiap
                hari.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Wallet className="h-10 w-10 text-primary" />
              <CardTitle>Transaksi Kilat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bayar tagihan listrik, air, internet, beli pulsa, hingga top-up
                e-wallet. Tanpa antre, tanpa ribet, langsung dari genggaman
                Anda.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
