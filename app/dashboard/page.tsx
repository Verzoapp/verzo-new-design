"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Calendar,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  Home,
  Document,
  Folder,
  UserGroup,
  ChartPie,
  DocumentDuplicate,
  Scale,
} from "heroicons-react";
import {
  Banknote,
  BanknoteIcon,
  BarChart3,
  Building2,
  Building2Icon,
  ChevronsRight,
  CheckCircleIcon,
  CheckCircle,
  Cog,
  Shield,
  FileQuestionIcon,
  Bell,
  ChevronDown,
  X,
} from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  {
    name: "Teams",
    icon: UserGroup,
    current: false,
    children: [
      { name: "Engineering", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Customer Success", href: "#" },
    ],
  },
  {
    name: "Projects",
    icon: Folder,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  { name: "Calendar", href: "#", icon: Calendar, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicate, current: false },
  { name: "Reports", href: "#", icon: ChartPie, current: false },
];

const secondaryNavigation = [
  { name: "Settings", href: "#", icon: Cog },
  { name: "Help", href: "#", icon: FileQuestionIcon },
  { name: "Privacy", href: "#", icon: Shield },
];
const cards = [
  {
    name: "Account balancess",
    href: "#",
    icon: Scale,
    amount: "$30,659.45",
  },
  {
    name: "Account balancedd",
    href: "#",
    icon: Scale,
    amount: "$30,659.45",
  },
  {
    name: "Account balanceff",
    href: "#",
    icon: Scale,
    amount: "$30,659.45",
  },
  {
    name: "Account balancrre",
    href: "#",
    icon: Scale,
    amount: "$30,659.45",
  },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 2,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 3,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 4,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};
function classNames<T>(...classes: (T | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pb-4 pt-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close sidebar</span>
                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300"
                      alt="Easywire logo"
                    />
                  </div>
                  <nav
                    className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-cyan-800 text-white"
                              : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                            "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="space-y-1 px-2">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-cyan-200"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}
        <div className="top-0 hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <aside
            className={`fixed inset-y-0 z-10 flex h-full max-h-screen w-64 flex-shrink-0 transform flex-col overflow-hidden border-r bg-white shadow transition-all ${
              isSidebarOpen
                ? "lg:static lg:shadow-none"
                : "-translate-x-full lg:w-20 lg:translate-x-0"
            }`}
          >
            {/* sidebar header */}
            <div
              className={`flex flex-shrink-0 flex-col justify-between p-2 ${
                isSidebarOpen ? "" : "lg:justify-center"
              }`}
            >
              <span className="whitespace-nowrap p-2 text-xl font-semibold uppercase leading-8 tracking-wider">
                {/* K<span className={isSidebarOpen ? "" : "lg:hidden"}>-WD</span> */}
                <svg
                  width={isSidebarOpen ? "70px" : "50px"}
                  height={isSidebarOpen ? "70px" : "50px"}
                  viewBox="0 0 300 300"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Verzo-Box">
                      <rect
                        id="Rectangle"
                        fill="#FFFFFF"
                        x="0"
                        y="0"
                        width="300"
                        height="300"
                      ></rect>
                      <path
                        d="M149.852669,92.2019372 L144.492669,92.2079372 L138.362669,92.2659372 L114.292669,92.2349372 C112.202669,92.2249372 110.132669,92.4409372 108.092669,92.8799372 C106.222669,93.2799372 104.372669,93.7479372 102.532669,94.2829372 L102.452669,94.3129372 C101.372669,94.6249372 100.312669,94.9569372 99.2726689,95.3249372 C85.8626689,99.7949372 73.8926689,107.742937 64.5626689,118.355937 C63.4926689,119.618937 62.4326689,120.910937 61.3826689,122.230937 C59.1826689,125.081937 57.1726689,128.076937 55.3726689,131.193937 C45.4826689,148.281937 42.2626689,168.420937 46.3126689,187.742937 C46.5926689,189.089937 46.9126689,190.434937 47.2626689,191.771937 C47.3526689,192.114937 47.4526689,192.457937 47.5526689,192.781937 C47.6226689,192.999937 47.7226689,193.381937 47.8126689,193.754937 C47.8626689,193.936937 47.9126689,194.116937 47.9526689,194.273937 L48.0726689,194.711937 C48.3826689,195.708937 48.7026689,196.700937 49.0526689,197.695937 C49.1526689,197.990937 49.2726689,198.291937 49.3826689,198.590937 C49.5126689,198.947937 49.6526689,199.302937 49.7626689,199.645937 C50.2326689,200.872937 50.7126689,202.085937 51.2426689,203.286937 C51.3026689,203.419937 51.3826689,203.539937 51.4826689,203.637937 C52.5926689,204.733937 53.8426689,205.675937 55.2026689,206.438937 C55.8126689,206.793937 56.4526689,207.109937 57.1026689,207.384937 C57.6826689,207.633937 58.3126689,207.756937 58.9426689,207.744937 L70.6026689,207.764937 L149.202669,207.756937 L160.052669,207.718937 L165.702669,207.715937 C171.912669,208.453937 178.192669,208.454937 184.402669,207.717937 C195.952669,206.364937 207.072669,202.516937 216.992669,196.440937 C226.912669,190.363937 235.392669,182.203937 241.852669,172.524937 C242.612669,171.391937 243.362669,170.233937 244.072669,169.052937 L244.962669,167.501937 C245.942669,165.809937 246.812669,164.080937 247.642669,162.340937 L247.922669,161.745937 C252.942669,150.979937 255.482669,139.225937 255.362669,127.347937 L255.392669,127.300937 L255.382669,127.045937 C255.342669,124.499937 255.212669,121.904937 254.912669,119.410937 C254.992669,119.376937 254.982669,119.104937 254.972669,118.828937 C254.962669,118.547937 254.952669,118.264937 255.042669,118.224937 C254.242669,109.684937 251.992669,101.343937 248.392669,93.5579372 L247.332669,91.7299372 L149.852669,92.2019372 Z M93.6726689,140.394937 C86.0726689,148.047937 81.5626689,158.234937 81.0126689,169.005937 C80.9426689,170.189937 80.9326689,171.368937 81.0126689,172.585937 L83.1726689,172.573937 L106.232669,172.583937 L108.342669,172.543937 L109.102669,172.549937 L168.692669,172.584937 C175.232669,173.162937 181.822669,172.309937 188.012669,170.085937 C197.102669,167.305937 205.042669,161.643937 210.632669,153.953937 C216.222669,146.264937 219.162669,136.964937 219.002669,127.459937 L217.912669,127.462937 L131.282669,127.462937 L127.522669,127.432937 L125.992669,127.433937 C125.692669,127.438937 125.392669,127.440937 125.102669,127.442937 C124.682669,127.444937 124.262669,127.447937 123.852669,127.456937 L123.682669,127.461937 C113.482669,127.723937 103.692669,131.523937 95.9826689,138.209937 L95.6026689,138.549937 C94.9426689,139.135937 94.2926689,139.747937 93.6726689,140.394937 Z M254.282669,120.028937 L254.312669,119.971937 L254.262669,119.929937 C254.132669,120.000937 254.002669,120.059937 253.872669,120.106937 L253.892669,120.195937 C253.962669,120.178937 254.022669,120.152937 254.092669,120.119937 L254.282669,120.028937 Z"
                        id="Shape"
                        fill="#027DFF"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>

              <button
                onClick={toggleSidebar}
                className="rounded-md p-2 lg:hidden"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                onClick={toggleSidebar}
                className="rounded-md p-2 focus:outline-none focus:ring"
              >
                {/* <ChevronDoubleLeft /> */}
                {isSidebarOpen ? <ChevronDoubleLeft /> : <ChevronDoubleRight />}
              </button>
            </div>
            {/* Sidebar links */}
            <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
              <ul className="overflow-hidden p-2"></ul>
            </nav>
            {/* Sidebar footer */}
            <div className="max-h-14 flex-shrink-0 border-t p-2">
              <button
                className={`flex w-full items-center justify-center space-x-1 rounded-md border bg-gray-100 px-4 py-2 font-medium uppercase tracking-wider focus:outline-none focus:ring ${
                  isSidebarOpen ? "" : "lg:hidden"
                }`}
              >
                <span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span className={isSidebarOpen ? "" : "lg:hidden"}>
                  {" "}
                  Logout{" "}
                </span>
              </button>
            </div>
          </aside>
        </div>
        <div
          className={`flex flex-1 flex-col ${
            isSidebarOpen ? " lg:pl-64" : " lg:pl-[80px]"
          }`}
        >
          <div className="sticky top-0 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-[1051px] lg:px-8 xl:max-w-7xl">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search transactions"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                      <span className="absolute -inset-1.5 lg:hidden" />
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        Emilia Birch
                      </span>
                      <ChevronDown
                        className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1 pb-8 bg-white">
            {/* Page header */}
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8 xl:max-w-7xl">
                <div className="py-6 md:flex md:items-center md:justify-between ">
                  <div className="min-w-0 flex-1">
                    {/* Profile */}
                    <div className="flex items-center">
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 rounded-full sm:hidden"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                            alt=""
                          />
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                            Good morning, Emilia Birch
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Company</dt>
                          <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                            <Building2
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            Duke street studio
                          </dd>
                          <dt className="sr-only">Account status</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                              aria-hidden="true"
                            />
                            Verified account
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Add money
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                      Send money
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  Overview
                </h2>
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {/* Card */}
                  {cards.map((card) => (
                    <div
                      key={card.name}
                      className="overflow-hidden rounded-lg bg-white shadow"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <card.icon
                              className="h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="truncate text-sm font-medium text-gray-500">
                                {card.name}
                              </dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">
                                  {card.amount}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                          <a
                            href={card.href}
                            className="font-medium text-cyan-700 hover:text-cyan-900"
                          >
                            View all
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8 xl:max-w-7xl">
                Recent activity
              </h2>

              {/* Activity list (smallest breakpoint only) */}
              <div className="shadow sm:hidden">
                <ul
                  role="list"
                  className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                >
                  {transactions.map((transaction) => (
                    <li key={transaction.id}>
                      <a
                        href={transaction.href}
                        className="block bg-white px-4 py-4 hover:bg-gray-50"
                      >
                        <span className="flex items-center space-x-4">
                          <span className="flex flex-1 space-x-2 truncate">
                            <Banknote
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="flex flex-col truncate text-sm text-gray-500">
                              <span className="truncate">
                                {transaction.name}
                              </span>
                              <span>
                                <span className="font-medium text-gray-900">
                                  {transaction.amount}
                                </span>{" "}
                                {transaction.currency}
                              </span>
                              <time dateTime={transaction.datetime}>
                                {transaction.date}
                              </time>
                            </span>
                          </span>
                          <ChevronsRight
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <nav
                  className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                  aria-label="Pagination"
                >
                  <div className="flex flex-1 justify-between">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>

              {/* Activity table (small breakpoint and up) */}
              <div className="hidden sm:block">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
                  <div className="mt-2 flex flex-col">
                    <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Transaction
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Amount
                            </th>
                            <th
                              className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                              scope="col"
                            >
                              Status
                            </th>
                            <th
                              className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className="bg-white">
                              <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                <div className="flex">
                                  <a
                                    href={transaction.href}
                                    className="group inline-flex space-x-2 truncate text-sm"
                                  >
                                    <Banknote
                                      className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <p className="truncate text-gray-500 group-hover:text-gray-900">
                                      {transaction.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {transaction.amount}
                                </span>
                                {transaction.currency}
                              </td>
                              <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                                {/* <span
                                  className={classNames(
                                    statusStyles[transaction.status],
                                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
                                  )}
                                >
                                  {transaction.status}
                                </span> */}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                                <time dateTime={transaction.datetime}>
                                  {transaction.date}
                                </time>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* Pagination */}
                      <nav
                        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                        aria-label="Pagination"
                      >
                        <div className="hidden sm:block">
                          <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to{" "}
                            <span className="font-medium">10</span> of{" "}
                            <span className="font-medium">20</span> results
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between gap-x-3 sm:justify-end">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                          >
                            Previous
                          </a>
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                          >
                            Next
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
