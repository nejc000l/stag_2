import React, { useState, useEffect } from "react";
import { UpdatePagesParams } from "@/app/[id]/page";
import supabase from "@/utils/supabase";

interface PdfContainerProps {
  page: UpdatePagesParams | null;
}

const PdfContainer: React.FC<PdfContainerProps> = ({ page }) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    if (page?.avatar) {
      setLink(
        `https://aotcwfclzyedcrdrjmra.supabase.co/storage/v1/object/public/avatars/${page.avatar}`
      );
    }
  }, [page]);

  return (
    <div className="w-[100%] ">
      <div className=" min-h-screen   paddings  blurEdge  shadow-4xl">
        <div className="relative  z-[2] ">
          <nav className="w-[100%] paddingNav  "></nav>
          <div className="w-full overflow-scroll flex justify-center ">
            <iframe src={link} width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfContainer;
