import React, { useState, useEffect, ChangeEvent } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { getData } from "../app/server-renderd/page";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import supabase from "@/utils/supabase";
interface File {
  name: string;
  id: string;
  last_accessed_at: Date;
  updated_at: Date;
  created_at: Date;
}
function PdfContainer({
  name,
  id,
  last_accessed_at,
  updated_at,
  created_at,
}: File) {
  const [data, setData] = useState<any[] | null>(null);
  const [message, setMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const loadStorage = async () => {
    try {
      const { data: files, error } = await supabase.storage.from("pdf").list();
      return files;
    } catch (error) {
      console.log("Error loading storage:", error);
      return [];
    }
  };
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files) return;
      const file = e.target.files[0];
      const files = await loadStorage();
      const fileExists = files.some((f) => f.name === file.name);
      if (fileExists) {
        setMessage(`File with name ${file.name} already exists in storage`);
      } else {
        const { data, error } = await supabase.storage
          .from("pdf")
          .upload("PdfFiles/" + file.name, file);
        if (data) {
          setUploadedFile(file);
          setMessage("success✅");
          setTimeout(() => {
            setMessage("");
          }, 5000);
          console.log("File uploaded:", data);
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
          }, 1000);
          console.log("Error uploading file:", error);
        }
      }
    } catch (error) {
      console.log("Error handling upload:", error);
    }
  };
  const handleRemove = () => {
    setUploadedFile(null);
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
                accept="pdf/*"
                className="block w-auto text-sm"
                id="file_input"
                onChange={(e) => {
                  handleUpload(e);
                }}
              />
              <p>{message}</p>
              {uploadedFile && (
                <>
                  <p>Uploaded file: {uploadedFile.name}</p>
                  <button className="m-5 text-red-500" onClick={handleRemove}>
                    Remove
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PdfContainer;
