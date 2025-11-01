import { Barcode, Home, Mail, MapPin, Phone, Send, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-3 py-10">
                <div className="flex flex-wrap justify-between ">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex gap-2 items-center">
                            <Image src="/logo.png" alt="company logo" width={25} height={25} />
                            <h6 className="font-bold text-lg">Oynex Pharma</h6>
                        </Link>
                        <p className="text-sm text-muted-foreground w-65">
                            Your trusted partner in pharmaceutical excellence and healthcare solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Home size={16} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <User size={16} />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Barcode size={16} />
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mt-0.5 " />
                                <span className="w-60">Cairo – Nasr City – Unit (B) in Makram Obeid – 6th Floor – Apartment 17</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 " />
                                <a href="tel:+20123456789" className="hover:text-primary transition-colors">
                                    +20106988152 / 02-22741637
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:www.oynexpharma@gmail.com" className="hover:text-primary transition-colors">
                                    www.oynexpharma@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <Separator className="my-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Oynex Pharma. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
