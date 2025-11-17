"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  const { t, i18n } = useTranslation("common");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("contact.formTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="w-full">
          <div className="flex flex-col gap-6">
            {/* Full Name */}
            <div
              className={`flex flex-col gap-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <label htmlFor="name" className="text-sm font-medium">
                {t("contact.fullName")}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t("contact.fullNamePlaceholder")}
                required
                className="border rounded-md p-2"
              />
            </div>

            {/* Email */}
            <div
              className={`flex flex-col gap-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <label htmlFor="email" className="text-sm font-medium">
                {t("contact.email")}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                required
                className="border rounded-md p-2"
              />
            </div>

            {/* Message */}
            <div
              className={`flex flex-col gap-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <label htmlFor="message" className="text-sm font-medium">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                required
                className="border rounded-md p-2 resize-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant={"main"} type="submit" className="w-full">
          {t("contact.submitButton")}
        </Button>
      </CardFooter>
    </Card>
  );
}
