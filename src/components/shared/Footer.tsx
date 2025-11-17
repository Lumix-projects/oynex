"use client";

import { Barcode, Home, Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.language === "ar";

  return (
    <footer className="border-t bg-background" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-left" style={{ textAlign: isRtl ? "right" : "left" }}>
            <Link href="/" className="flex gap-2 items-center">
              <Image src="/logo.png" alt="company logo" width={25} height={25} />
              <h6 className="font-bold text-lg">Oynex Pharma</h6>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.companyDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left" style={{ textAlign: isRtl ? "right" : "left" }}>
            <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Home size={16} />
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <User size={16} />
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Barcode size={16} />
                  {t("footer.products")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-left" style={{ textAlign: isRtl ? "right" : "left" }}>
            <h3 className="font-semibold text-lg">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+20106988152" className="hover:text-primary transition-colors">
                  {t("footer.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:www.oynexpharma@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  www.oynexpharma@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          style={{ textAlign: isRtl ? "right" : "left" }}
        >
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Oynex Pharma. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
