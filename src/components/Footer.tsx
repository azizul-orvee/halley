import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";

const column3 = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
];

export default function Footer() {

  const bgClasses = [
    'bg-amber-400',
    'bg-amber-500',// Add more as needed
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    // Change the background class every 1000ms (1 second)
    const intervalId = setInterval(() => {
      setCurrentBgIndex((currentBgIndex) => (currentBgIndex + 1) % bgClasses.length);
    }, 100); // Adjust time as needed

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [bgClasses.length]); // Dependency array ensures effect runs only when bgClasses.length changes

  return (
    <footer>
      <div>
        <div
          className={`md:hidden w-full py-2 text-black fixed bottom-0`}
        >
          <div className="flex justify-evenly items-center">
            <a href='tel:03300432940'>
            <div className={`px-6 py-1 ${bgClasses[currentBgIndex]} rounded-lg shadow-md cursor-pointer flex items-center gap-1 justify-center`}>
              <div className="icon-container custom-ping-animation">
                <IoMdCall size={50} style={{ fill: "#000" }} />
              </div>
              <div className="">
                
                <p className="font-bold text-xl tracking-wider">07835 363565</p>
                <p className="text-center text-xs">We are available now</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 text-black dark:text-neutral-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2 bg-white flex justify-center items-center">
    <Link href="/">
      <div className="flex justify-center items-center">
        <Image
          src="/images/logos/moon-tyre.png"
          alt="Logo Your Company"
          width={200}
          height={200}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  </div>

          <div className=" px-5">
            <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
              Service Hours
            </h3>
          <div className="p-2">
          <div className="mb-1">24/7</div>
            <div className="mb-1">Please contact us now to check availability</div>
            <div className="underline">
              <Link href='tel:07835363565'>
              07835 363565
              </Link>
            </div>
          </div>
    
          </div>


          <div>
            <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
              LEGAL
            </h3>
            {column3.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-rose-500 md:text-sm my-4 grid"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-12">
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800">
          <Link
            href="https://humbernieto.pro"
            target="_blank"
            className="text-neutral-300 dark:text-neutral-400 text-sm hover:text-rose-500 dark:hover:text-rose-500 transition duration-300"
          >
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
}
