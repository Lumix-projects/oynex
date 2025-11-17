"use client";

import { ReactNode } from "react";
import "@/lib/i18n"; // استدعاء i18next بعد ما نخلي المكون Client

export function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
