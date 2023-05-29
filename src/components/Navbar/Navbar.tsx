"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import {
  HiOutlineChevronDown,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import Link from "next/link";
import { classNames } from "@/utils/dateFunctions";

const navigation = [
  { name: "Home", href: "/" },
  { name: "My Stats", href: "#" },
  { name: "Global Stats", href: "#" },
  { name: "Leaderboards", href: "#" },
];

const userNavigation = [
  { href: "/profile", label: "Profile" },
  { href: "/sign-out", label: "Sign out" },
];

const mockData = {
  avatar:
    "https://avatars.akamai.steamstatic.com/31b7378fba39a6263022f90ab9ec75a437f70806_full.jpg",
  username: "KorzaKapitány",
  steamId: "76561198043886064",
  steamProfile: "https://steamcommunity.com/profiles/76561198043886064",
  huntId: "76561198043886064",
  joinDate: "2023-01-01T15:00:00.000Z",
  globalStats: {
    bountyHunt: 1221,
    quickPlay: 26,
    skillBased: 614,
  },
  totalStats: {
    kills: 1764,
    deaths: 1038,
    assists: 513,
    kdRatio: 1.7,
  },
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 flex flex-col items-center p-1.5">
          <span className="sr-only">Tierzero</span>
          <Image src={logo} alt="logo" className="h-12 w-auto" />
          <span className="text-xs font-bold">Beta 1.3.0</span>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiOutlineMenuAlt3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
          {/* <Link
            href="#"
            className="text-sm font-semibold leading-6 text-primary"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}

          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <Image
                width={32}
                height={32}
                className="rounded-full bg-gray-50"
                src={mockData.avatar}
                alt="avatar"
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6"
                  aria-hidden="true"
                >
                  {mockData.username}
                </span>
                <HiOutlineChevronDown
                  className="ml-2 h-5 w-5 text-zinc-400"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-zinc-900 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.label}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={classNames(
                          active ? "bg-zinc-800" : "",
                          "block px-3 py-1 text-sm leading-6 text-zinc-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 flex flex-col items-center p-1.5">
              <span className="sr-only">Tierzero</span>
              <Image src={logo} alt="logo" className="h-12 w-auto" />
              <span className="text-xs font-bold">Beta 1.3.0</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiOutlineX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-50/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-50 hover:bg-zinc-950"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-50 hover:bg-zinc-950"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
