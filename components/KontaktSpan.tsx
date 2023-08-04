import { NavLinks } from "@/constants";
import React from "react";

function KontaktSpan() {
  return (
    <>
      <div className=" m-[1rem] flex flex-col  text-[12px] gap-[2px] items-center">
        {NavLinks.map((link) => (
          <div className="font-light text-[#c5cec5]" key={link.key}>
            {link.email}
          </div>
        ))}
        {NavLinks.map((link) => (
          <div className="font-light text-[#c3ccc3]" key={link.key}>
            {link.vodja}
          </div>
        ))}
      </div>
    </>
  );
}

export default KontaktSpan;
