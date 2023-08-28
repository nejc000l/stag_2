import { NavLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavLink } from "@/components/LinksMainPage";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
function Footer() {
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
    <footer className=" flex flex-start footer  relative text-[12px] md:text-lg  ">
      <div className="">
        <div className="flex items-start flex-col py-2">
          Vidergarjeva ulica 13 Ljubljana 1261 LJUBLJANA-DOBRUNJE
        </div>
        <div className="flex flex-wrap  ">
          {navLinks.slice(0, 5).map((link) => (
            <Link className="pr-6" href={link.href} key={link.id}>
              <ul>
                <li className="list-none	">{link.title}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
