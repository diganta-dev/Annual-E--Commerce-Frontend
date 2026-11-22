


import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Login() {
  return (
    <div className="flex min-h-svh">
      {/***Left */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#06251A] to-[#10543A] p-12 lg:w-[440px] xl:w-[500px]">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Platform Admin Logo" className="size-12 rounded-xl shadow-lg shadow-black/20" />
          <span className="text-base font-bold text-white"> E-Commerce Website</span>
        </div>

        <div>
          <h1 className="max-w-[380px] text-2xl leading-snug font-bold text-white">
            Run every store on your marketplace from one place.
          </h1>
          <p className="mt-3.5 max-w-[360px] text-sm leading-5 text-[#c7dccb]">
            Tenants, catalog, commissions, delivery network and reporting — unified across every store on the platform.
          </p>
        </div>

        <p className="text-xs text-[#8fb093]">&copy; 2026 Dynamic Coding with Diganta</p>
      </div>


      {/***Right */}
      <div className="flex flex-1 items-center justify-center bg-background p-8">

      </div>
    </div>
  );
}
