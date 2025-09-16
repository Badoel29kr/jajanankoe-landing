// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppLink(message: string): string {
  // PENTING: Ganti dengan nomor WhatsApp bisnis Anda (gunakan format 62, bukan 0)
  const phoneNumber = "6285624548548";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
