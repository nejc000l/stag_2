import { NavLinks } from '@/constants';
import Link from 'next/link';
import React from 'react'
type NavLink = {
    href: string;
    key: string;
    text: string;
    shouldUnderline?: boolean;
  };
function LinksMainPage() {
  return (
    <>
    
    <ul className="relative text-center  text-white flex flex-col font-light ">
          {NavLinks.slice(1).map((link: NavLink) => {
            const linkClass = link.shouldUnderline
              ? " py-4 hover:underline"
              : "py-4";
            return (
              <li key={link.key}>
                <Link href={link.href}>
                  <div className={linkClass}>{link.text}</div>
                </Link>
              </li>
            );
          })}
        </ul>
    </>
  )
}

export default LinksMainPage