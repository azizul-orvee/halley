import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";


export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-extrabold">
            <span className="text-amber-400">Emergency</span> <br />{" "}
            Mobile Tyre <br />{" "}
            Fitting
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Plantilla de aplicación de página única (SPA) desarrollada con
            Next.js, TypeScript y TailwindCSS. Personalizable y algunas
            secciones para agregar información importante sobre un producto o un
            servicio.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
           <Link
                    href="tel:07835363565"
                    target="_blank"
                  >
                    <button className="bg-amber-400 text-black underline px-6 py-4 text-base font-medium rounded-full">
                      07835 363565 
                    </button>
                
                  </Link>
                
            </div>

            <div>
              <Link href="https://wa.me/+4407835363565 " target="_blank">
                <button className="bg-gray-100 p-1 rounded-full animate-bounce">
                <IoLogoWhatsapp size={50} style={{ fill: "#8bc34a" }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-12 shadow-xl shadow-slate-400">
          <Image
            src="/images/hero/hero.jpeg"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
