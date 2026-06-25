"use client";

import Image from "next/image";
import Link from "next/link";
//@ts-ignore
import logo from "@/public/startup-weekend-logo.png";

interface LogoProps {
  className?: string;
  variant?: "nav" | "footer";
}

export function Logo({ className = "h-auto w-44", variant = "nav" }: LogoProps) {
  return (
    <div className="flex items-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-black leading-tight">
          techstars_
        </span>
        <span className="text-lg font-bold text-black leading-tight">
          Startup Weekend
        </span>
        <span className="text-lg font-bold text-blue-500 leading-tight">
          Varanasi
        </span>
      </div>
    </div>
  );
}

export function LogoLink() {
  return (
    <Link href="/" className="flex items-center">
      <Logo />
    </Link>
  );
}

