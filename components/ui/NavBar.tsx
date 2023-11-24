"use client";
import React, { Fragment, useState } from "react";
import Img from "next/image";
import { auth } from "@clerk/nextjs";
import {
  Bird,
  ChevronDownIcon,
  Image,
  Medal,
  PawPrint,
  UserSquare,
} from "lucide-react";
import Link from "next/link";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const categories = [
  { name: "Portraits", href: "/gallery/portraits", icon: UserSquare },
  { name: "Birds", href: "/gallery/birds", icon: Bird },
  { name: "Wildlife", href: "/gallery/wildlife", icon: PawPrint },
  { name: "Sports", href: "/gallery/sports", icon: Medal },
  { name: "Landscape", href: "/gallery/landscape", icon: Image },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav
        className="flex items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Img
              className="h-8 w-auto"
              src="https://res.cloudinary.com/ddsnqfovk/image/upload/v1691500015/alex/logo_bnkr1d.png"
              alt="alex-logo"
              height={50}
              width={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-50 hover:text-indigo-500 "
            >
              {item.name}
            </Link>
          ))}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
                Gallery
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -left-8 top-full z-10 mt-3  text-slate-50 w-screen max-w-xs overflow-hidden rounded-xl bg-black to-98% shadow-lg ring-1 ring-gray-800">
                <div className="px-1 py-1">
                  {categories.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={`${
                            active
                              ? "bg-indigo-500 text-slate-50"
                              : "text-slate-50"
                          } group relative gap-x-2 flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <item.icon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <item.icon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/studio"
            className="text-sm font-semibold leading-6 text-gray-50"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/ddsnqfovk/image/upload/v1691500015/alex/logo_bnkr1d.png"
                alt="alex-logo"
                height={50}
                width={100}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-50/60">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-violet-500"
                  >
                    {item.name}
                  </Link>
                ))}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-indigo-500">
                        Gallery
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...categories].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-indigo-500"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href=""
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-indigo-500"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
