import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";


export function EmergencyRHero() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const phoneLink = process.env.NEXT_PUBLIC_PHONE_LINK;
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK;

  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-extrabold">
            <span className="text-amber-400">Emergency</span> <br />{" "}
            Tyre <br />{" "}
            Replacement
          </h1>
          <h1 className="p-1 mt-6 text-lg font-semibold shadow-xl italic w-auto sm:w-10/12 md:w-10/12 bg-gray-100">
              45-60 mins response time
              </h1>
          <h1 className="pt-6 text-xl font-medium w-auto sm:w-10/12 md:w-10/12">
          Found upon us during your Google search? Great news! you are now moments away from our mobile tyre fitting service available. <br />{" "} <br />{" "} 
          Whether you are at home, work, or stranded by the roadside, our solution is designed for your utmost convenience.
          </h1>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
           <Link
                    href={phoneLink}
                    target="_blank"
                  >
                    <button className="bg-amber-400 text-black text-lg underline px-6 py-3 font-medium rounded-md">
                    {phoneNumber} 
                    </button>
                
                  </Link>
                
            </div>

            <div>
              <Link href={whatsappLink} target="_blank">
                <button className="bg-gray-100 p-1 rounded-full animate-bounce">
                <IoLogoWhatsapp size={50} style={{ fill: "#8bc34a" }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 shadow-xl shadow-slate-400">
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
