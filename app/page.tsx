import type { Metadata } from "next";
import Image from "next/image";
import type { PropsWithChildren, ReactNode } from "react";

const COMPANY = {
    name: "DMM Importacao e Exportacao Ltda",
    phoneRaw: "5511966550005",
} as const;

const WHATSAPP_LINK = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
    "Ola, vim pelo site e gostaria de uma consultoria tecnica sobre importacao de carros de luxo."
  )}`;

export const metadata: Metadata = {
    title: "Importacao Premium de Carros de Luxo | DMM",
    description: "Assessoria premium para importacao de veiculos exclusivos with seguranca juridica e operacional.",
};
