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
    '/n_r_l_u': '/path/to/n_r_l_u/file.pdf',
    '/novice': '/path/to/novice/file.pdf'
  };
  
  let file = fileMap[pathname];
  return (
    <div className="w-[100%] ">
      <div className="bg-[#0411042f] min-h-screen   paddings  blurEdge  shadow-4xl">
        <div className="relative z-[2]  ">
          <nav className="w-[100%] paddingNav  ">
          </nav>
          <div className="w-full overflow-scroll flex justify-center ">
            <div className=" text-center ">
              <Document
                className="h-[100vh]"
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={600}
                    height={600}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfContainer;
