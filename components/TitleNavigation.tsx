import React from "react";
import KontaktSpan from "./KontaktSpan";
import LinksMainPage from "./LinksMainPage";

function TitleNavigation() {
  return (
    <div className="h-screen paddings relative flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center p-24 flex-wrap ">
        <div className="  font-semibold text-center absolute md:top-24 top-[16%]">
          <h6 className="md:text-4xl text-sm  text-[#173b19] font-bold">
            LOVSKA DRUŽINA
          </h6>
          <h1 className="text-[4rem] md:text-[8rem]  drop-shadow-lg 	 text-[#aa730e]">
            Pugled{" "}
          </h1>
        </div>
       <KontaktSpan/>
       <LinksMainPage/>
      </div>
    </div>
  );
}

export default TitleNavigation;
