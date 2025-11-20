"use client";

import { type ReactNode } from "react";
import {
  NextIntlClientProvider,
  type AbstractIntlMessages,
} from "next-intl";

type Props = {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
};

export function I18nProvider({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
