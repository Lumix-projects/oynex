"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-main transition-opacity duration-700">
          <div className="flex flex-col items-center justify-center animate-fadeIn">
            <Image
              src="/splashlogo.png"
              alt="App Logo"
              width={180}
              height={180}
              className="mb-4"
            />
            <h1 className="text-3xl font-semibold text-white">Oynex Pharma</h1>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
