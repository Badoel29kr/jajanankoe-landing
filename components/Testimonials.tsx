// components/Testimonials.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonialData = [
  {
    name: "Andini S.",
    title: "Karyawan Swasta",
    avatar: "/avatars/andini.png",
    fallback: "AS",
    rating: 5,
    comment:
      "Kue lumpurnya juara! Rasanya pas, mengingatkan sama buatan nenek. Pesan sore, malam sudah sampai dalam keadaan hangat. Pelayanannya cepat dan ramah.",
  },
  {
    name: "Budi P.",
    title: "Mahasiswa",
    avatar: "/avatars/budi.png",
    fallback: "BP",
    rating: 5,
    comment:
      "Sangat membantu! Lagi WFH sambil ngemil risoles, baru ingat token listrik habis. Langsung beli di Jajanankoe, tidak sampai 1 menit sudah beres. Praktis banget!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            Apa Kata Pelanggan Setia Kami?
          </h2>
          <p className="text-muted-foreground mb-12">
            Kepuasan Anda adalah prioritas utama kami.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonialData.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
