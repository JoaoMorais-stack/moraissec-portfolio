import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "João Morais | Pentest, Red Team e Segurança Ofensiva";
  const description =
    "Portfólio profissional de João Morais, profissional em formação com foco em Pentest, Red Team e segurança ofensiva, apoiado por Python e automação.";
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "João Morais",
      "MoraisSec",
      "Pentest",
      "Red Team",
      "Segurança Ofensiva",
      "Cybersecurity",
      "Python",
    ],
    authors: [{ name: "João Morais" }],
    icons: {
      icon: "/moraissec-logo.png",
      shortcut: "/moraissec-logo.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      alternateLocale: ["en_US"],
      title,
      description,
      siteName: "MoraisSec",
      url: origin,
      images: [{ url: socialImage, width: 1733, height: 909, alt: "João Morais — Pentest e Red Team" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
