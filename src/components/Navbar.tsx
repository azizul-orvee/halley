import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IoMdCall } from "react-icons/io";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "FAQ", href: "#faq", current: false },
  { name: "Mobile Tyre Fitters", href: "/mobile-tyre-fitters", current: false, desk:false },
  { name: "Emergency Mobile Tyre Fitting", href: "/emergency-mobile-tyre-fitting", current: false, desk:false },
  { name: "Mobile Tyre Fitting", href: "/mobile-tyre-fitting", current: false, desk:false },
  { name: "Emergency Tyre Replacement", href: "/emergency-tyre-replacement", current: false, desk:false },
];

const tyreServices = [
  { name: "Mobile Tyre Fitters", href: "/mobile-tyre-fitters", current: false },
  { name: "Emergency Mobile Tyre Fitting", href: "/emergency-mobile-tyre-fitting", current: false },
  { name: "Mobile Tyre Fitting", href: "/mobile-tyre-fitting", current: false },
  { name: "Emergency Tyre Replacement", href: "/emergency-tyre-replacement", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block"
                      src="/images/logos/moon-tyre.png"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 items-center">
                  {navigation.filter(item => item.desk !== false).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-neutral-900"
                            : "text-neutral-900 hover:underline",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Menu as="div" className="relative hidden sm:ml-6 sm:block">
                <Menu.Button className="flex space-x-5 items-center text-base font-medium">
                  Tyre Services <ChevronDownIcon className="ml-2 w-5 h-5" />
                </Menu.Button>
                <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white dark:bg-neutral-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {tyreServices.map((service) => (
                      <Menu.Item key={service.name}>
                        {({ active }) => (
                          <Link href={service.href}>
                            <div className={classNames(active ? 'bg-gray-100 dark:bg-neutral-700' : '', 'block px-4 py-2 text-sm text-neutral-900 dark:text-neutral-400')}>
                              {service.name}
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                  <Link
                    href="tel:07835363565"
                    target="_blank"
                    className="hidden sm:block"
                  >
                    <button className="bg-amber-400 text-black px-4 p-2 text-base font-medium  rounded-full">
                      07835 363565
                    </button>
                  </Link>

                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 "
                      : "text-neutral-900",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link href="tel:07835363565" target="_blank">
    
                <button className="flex items-center justify-center mt-12 bg-amber-400 text-black px-4 p-3 font-bold text-lg rounded-full w-full">
                <IoMdCall className="animate-ping" size={30} />
                 <span className="px-2">07835 363565</span>
                </button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}