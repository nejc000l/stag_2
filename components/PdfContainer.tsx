import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function PdfContainer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const pathname = usePathname()
  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }
  const fileMap: { [key: string]: string } = {
    '/info_j_z': '/LD_Pugled_Katalog_javnega.pdf',
    '/apk': '/ZNUAPK.pdf',
    '/n_r_u_l': '/Nacrt_ravnanja_APK.pdf',
    '/novice': '/zapisnik.pdf'
  };
  
  let file = fileMap[pathname];
  return (
    <div className="w-[100%] ">
      <div className=" min-h-screen   paddings  blurEdge  shadow-4xl">
        <div className="relative mr-[20%] ml-[20%] z-[2] ">
          <nav className="w-[100%] paddingNav  ">
          </nav>
          <div className="w-full overflow-scroll flex justify-center ">
            <div className=" text-center  ">
             <iframe className="p-4" height={600} width={600}  src={file} ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfContainer;
