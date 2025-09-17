// components/SupportedServices.tsx
import Image from "next/image";

const services = [
  { name: "PLN", logo: "/logos/pln.svg" },
  { name: "PDAM", logo: "/logos/pdam.svg" },
  { name: "Telkomsel", logo: "/logos/telkomsel.svg" },
  { name: "IndiHome", logo: "/logos/indihome.svg" },
  { name: "BPJS Kesehatan", logo: "/logos/bpjs.svg" },
  { name: "ShopeePay", logo: "/logos/spay.svg" },
  { name: "OVO", logo: "/logos/ovo.svg" },
  { name: "DANA", logo: "/logos/dana.svg" },
];

export default function SupportedServices() {
  return (
    <section id="bayar" className="w-full py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Bayar Apapun Lebih Mudah</h2>
        <p className="text-muted-foreground mb-12">
          Layanan pembayaran terlengkap untuk semua kebutuhan Anda.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.name}>
              <Image
                src={service.logo}
                alt={service.name}
                width={100}
                height={50}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
