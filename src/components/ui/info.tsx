import { Mail, MapPinHouse, Phone } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function Info() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Our Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col text-left gap-2">
          <div>
            <h6 className=" font-medium">Address</h6>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mt-2">
              <MapPinHouse size={24} />
              <p className="text-sm">
                Cairo – Nasr City – Unit (B) in Makram Obeid – 6th Floor –
                Apartment 17
              </p>
            </div>
          </div>
          <div>
            <h6 className=" font-medium">Phone</h6>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mt-2">
              <Phone size={24} />
              <p className="text-sm">+20106988152 / 02-22741637 </p>
            </div>
          </div>
          <div>
            <h6 className=" font-medium">Email</h6>
            <div className="flex items-center gap-2 text-sm text-foreground/70 mt-2">
              <Mail size={24} />
              <p className="text-sm">www.oynexpharma@gmail.com</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
