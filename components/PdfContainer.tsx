"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import supabase from "@/utils/supabase";
interface File {
  name: string;
}
function PdfContainer() {
  const [message, setMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loadData, setLoadData] = useState<File[] | null>(null);

  // use effect hook part _____________________________________________________________
  useEffect(() => {
    const loadStorage = async () => {
      const { data: files, error } = await supabase.storage
        .from("pdf")
        .list("PdfFiles");
      setLoadData(files);
      console.log(loadData?.map((file) => file));
      return setLoadData;
    };
    loadStorage();
  }, []);
  // Storage and upload part of the code_______________________________________________________________________________
  let pdfName = loadData?.map((file) => file.name);
  let firstPdfName = pdfName?.[0];
  let link = `https://xjdkqmvgsfixvpbzprye.supabase.co/storage/v1/object/public/pdf/PdfFiles/${firstPdfName}`;
  console.log(link);
  const loadStorage = async () => {
    try {
      const { data: files, error } = await supabase.storage
        .from("pdf")
        .list("PdfFiles");

      return files;
    } catch (error) {
      console.log("Error loading storage:", error);
      return [];
    }
  };

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      if (!e.target.files) return;
      const file = e.target.files[0];
      const storageData = await loadStorage();
      const filename = `${"PdfFiles/" + file.name}`;
      // Check if file already exists
      const fileExists = storageData?.some((f) => f.name === file.name);
      if (fileExists) {
        setMessage(`File with name ${file.name} already exists in storage`);
        return;
      }
      // Upload the file
      const { data, error } = await supabase.storage
        .from("pdf")
        .upload(filename, file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (data) {
        setUploadedFile(file);
        setMessage("success✅");
        console.log("File uploaded:", data);

        // Store uploaded file in localStorage
        localStorage.setItem("uploadedFile", JSON.stringify(storageData));
      } else if (error) {
        let countdown = 5;
        const intervalId = setInterval(() => {
          setMessage(
            `There was an error ❌ You can try again in ${countdown} seconds`
          );
          countdown--;
          if (countdown < 0) {
            clearInterval(intervalId);
            setMessage("");
          }
          const inputElement =
            document.querySelector<HTMLInputElement>("#file_input");
          if (inputElement) {
            inputElement.value = "";
          }
        }, 1000);
        console.log("Error uploading file:", error);
      }
    } catch (error) {
      console.log("Error handling upload:", error);
    }
  };

  const handleRemove = async () => {
    try {
      const paths = ["PdfFiles/" + uploadedFile?.name];
      const { data: files, error } = await supabase.storage
        .from("pdf")
        .remove(paths);
      setUploadedFile(null);
      setTimeout(() => {
        setMessage("File removed");

        // Remove item from local storage
        localStorage.removeItem("uploadedFile");

        setTimeout(() => {
          setMessage("");

          // Reset the <input> element
          const inputElement =
            document.querySelector<HTMLInputElement>("#file_input");
          if (inputElement) {
            inputElement.value = "";
          }
        }, 1000);
      }, 1000);
      return files;
    } catch (error) {
      console.log("Error removing files:", error);
      return [];
    }
  };

  return (
    <div className="w-[100%] ">
      <div className=" min-h-screen   paddings  blurEdge  shadow-4xl">
        <div className="relative  z-[2] ">
          <nav className="w-[100%] paddingNav  "></nav>
          <div className="w-full overflow-scroll flex justify-center ">
            <div className=" text-center flex items-center justify-center ">
              <input
                type="file"
                accept="pdf/*" //format on save
                className="block w-auto text-sm"
                id="file_input"
                onChange={(e) => {
                  handleUpload(e);
                }}
              />
              <p>{message}</p>
              {uploadedFile && localStorage.getItem("uploadedFile") && (
                <div className="flex items-center ">
                  <p>Uploaded file: {uploadedFile.name}</p>
                  <button
                    className="m-5 text-red-500 p-2 ring-2 ring-red-500/[.20]"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className=" text-center flex justify-center items-center m-4  ">
            <iframe width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfContainer;
