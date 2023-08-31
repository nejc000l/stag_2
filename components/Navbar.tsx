"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

import { FC } from "react";

import { Transition } from "@headlessui/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { CgMenuGridO } from "react-icons/cg";
import { RiAdminLine } from "react-icons/ri";
import { UrlObject } from "url";
interface NavbarProps {
  toggleAuth: () => void;
  session: Session | null;
}
interface NavLink {
  href: any;
  title: any;
  id: any;
}
/**
 * TODO I have to fix the button for the menu and place it inside the div and make it relative
 */

const Navbar: FC<NavbarProps> = ({ toggleAuth, session }) => {
  const supabase = createClientComponentClient<Database>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const user = session?.user;
  const getProfile = async () => {
    let { data, error, status } = await supabase
      .from("pages")
      .select("id, href, title");

    if (data) {
      // Map through the 'data' array and create a new NavLink object for each 'href' value
      const newNavLinks: NavLink[] = data.map((item) => ({
        id: item.id,
        href: item.href,
        title: item.title,
        text: "Link text here", // Replace this with the desired link text
      }));
      // Update the 'navLinks' state variable with the new array of NavLink objects
      setNavLinks(newNavLinks);
    }
  };

  const router = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsScrolled(window.scrollY > 0);
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMenuOpen(false);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const routeMap: { [key: string]: string } = {
    "/": "/",
  };
  useEffect(() => {
    getProfile();
  }, []);

  let file = routeMap[router];
  return (
    <nav
      className={`justify-between flex sticky top-0 z-[5] items-center text-white ${
        isScrolled
          ? "navbar"
          : file
          ? "bg-transparent"
          : file
          ? "no-blur"
          : "bg-transparent backgroundOverlay2"
      }`}
    >
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/images/LZS_logo_90.png"
            width={144}
            height={40}
            alt="LZS-logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        {router === "/" && (
          <button className="w-4 h-4 ">
            <RiAdminLine width={24} height={24} onClick={toggleAuth} />
          </button>
        )}
      </div>

      {windowWidth >= 1280 ? (
        <>
          <ul className="xl:flex text-small gap-4">
            <Link className="text-white hover:underline font-bold" href="/">
              <li className="py-2 text-white hover:underline font-bold">
                Domov
              </li>
            </Link>
          </ul>

          <>
            <ul className="xl:flex text-small gap-4">
              {navLinks.slice(0, 2).map((link) => (
                <Link href={link.href} key={link.id}>
                  <li className="py-2 text-white hover:underline font-bold">
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>

            <button
              className=" text-[24px] "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <CgMenuGridO width={"50px"} height={"50px"} />
              ) : (
                <CgMenuGridO width={"50px"} height={"50px"} />
              )}
            </button>
            <div className="">
              <Transition
                className="relative w-[100%] left-[-150px]  top-[20px] "
                show={isMenuOpen}
                enter="transition duration-200 ease-out "
                enterFrom="transform -translate-y-full opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition duration-200 ease-in"
                leaveFrom="transform translate-y-0 opacity-100 "
                leaveTo="transform -translate-y-full opacity-0"
              >
                <ul className="flex flex-col z-10  bg-[#0c1607] text-black  fixed top-0 left-0 p-4 transform ">
                  {navLinks.slice(2).map((link) => (
                    <Link href={link.href} key={link.id}>
                      <li className="py-2 text-white hover:underline">
                        {link.title}
                      </li>{" "}
                    </Link>
                  ))}
                </ul>
              </Transition>
            </div>
          </>
        </>
      ) : (
        <>
          <button
            className=" text-[24px] "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CgMenuGridO width={"50px"} height={"50px"} />
            ) : (
              <CgMenuGridO width={"50px"} height={"50px"} />
            )}
          </button>
          <div className="">
            <Transition
              className="relative w-[100%] left-[-150px]  top-[20px] "
              show={isMenuOpen}
              enter="transition duration-200 ease-out "
              enterFrom="transform -translate-y-full opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in"
              leaveFrom="transform translate-y-0 opacity-100 "
              leaveTo="transform -translate-y-full opacity-0"
            >
              <ul className="flex flex-col z-10  bg-[#0c1607] text-black  fixed top-0 left-0 p-4 transform ">
                <ul className="py-2 text-white hover:underline">
                  <Link
                    className="text-white hover:underline font-bold"
                    href="/"
                  >
                    <li className="py-2 text-white hover:underline ">Domov</li>
                  </Link>
                </ul>
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.id}>
                    <li className="py-2 text-white hover:underline">
                      {link.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </Transition>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
