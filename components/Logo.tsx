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
    <div className="flex items-center bg-transparent rounded-lg p-3 border border-zinc-800 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight tracking-wide">
          techstars_
        </span>
        <span className="text-lg font-bold text-white leading-tight">
          Startup Weekend
        </span>
        <span className="text-lg font-bold text-[#00b0f0] leading-tight">
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

