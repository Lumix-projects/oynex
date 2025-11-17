"use client";

import { Mail, MapPinHouse, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { useLocalization } from "@/hooks/useLocalization";

export default function Info() {
  const { t, isRtl } = useLocalization();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("contact.infoTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`flex flex-col gap-4 ${isRtl ? "text-right" : "text-left"}`}>
          {/* Address */}
          <div>
            <h6 className="font-medium">{t("contact.address")}</h6>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mt-2">
              <MapPinHouse size={24} />
              <p className="text-sm">{t("contact.addressDetails")}</p>
            </div>
          </div>

          {/* Phone */}
          <div>
            <h6 className="font-medium">{t("contact.phone")}</h6>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mt-2">
              <Phone size={24} />
              <p className="text-sm">{t("contact.phoneDetails")}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <h6 className="font-medium">{t("contact.emailLabel")}</h6>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mt-2">
              <Mail size={24} />
              <p className="text-sm">{t("contact.emailDetails")}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
