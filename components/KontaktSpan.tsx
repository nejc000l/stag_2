import { NavLinks } from "@/constants";
import React from "react";

function KontaktSpan() {
  return (
    <>
      <span className=" m-[1rem] flex flex-col  text-[12px] gap-[2px] items-center">
        {NavLinks.map((link) => (
          <span className="font-light text-[#c5cec5]" key={link.key}>
            {link.email}
          </span>
        ))}
        {NavLinks.map((link) => (
          <span className="font-light text-[#c3ccc3]" key={link.key}>
            {link.vodja}
          </span>
        ))}
      </span>
    </>
  );
}

export default KontaktSpan;
