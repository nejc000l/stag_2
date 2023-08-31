import { NavLinks } from "@/constants";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export type NavLink = {
  href: any;
  title: any;
  id: any;
  shouldUnderline?: boolean;
};

function LinksMainPage() {
  const supabase = createClientComponentClient<Database>();
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const getProfile = async () => {
    let { data, error, status } = await supabase
      .from("pages")
      .select("id, href, title");

    if (data) {
      const newNavLinks: NavLink[] = data.map((item) => ({
        id: item.id,
        href: item.href,
        title: item.title,
      }));
      setNavLinks(newNavLinks);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <ul className="relative text-center font-bold text-[10px] md:text-lg text-white flex flex-col  ">
        {navLinks.map((link: NavLink) => {
          const linkClass = link.shouldUnderline
            ? " py-4 hover:underline"
            : "py-4  hover:underline";
          return (
            <li key={link.id}>
              <Link href={link.href}>
                <div className={linkClass}>{link.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default LinksMainPage;
