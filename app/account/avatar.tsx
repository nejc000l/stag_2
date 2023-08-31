"use client";
import React, { useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
type pages = Database["public"]["Tables"]["pages"]["Row"];

export default function Avatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string | undefined;
  url: pages["avatar"];
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = createClientComponentClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<pages["avatar"]>(url);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function downloadAvatar(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadAvatar(url);
  }, [url, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      // Check if the file already exists in the storage bucket
      let { data: existingFile, error: listError } = await supabase.storage
        .from("avatars")
        .list(filePath);
      if (listError) {
        throw listError;
      }

      // If the file already exists, use its name
      if (existingFile && existingFile.length > 0) {
        onUpload(existingFile[0].name);
      } else {
        // If the file does not exist, upload it and call the onUpload function with the generated file path
        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file);

        if (uploadError) {
          throw uploadError;
        }

        onUpload(filePath);
      }
    } catch (error) {
      alert("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
  };
  const isLargeScreen = window.matchMedia("(width: 1024px)").matches;

  return (
    <div className="flex flex-col items-center mb-4 ">
      {avatarUrl ? (
        <iframe
          width={size}
          height={size}
          src={avatarUrl}
          className="avatar image"
          style={
            isLargeScreen
              ? { height: 500, width: 500 }
              : { height: 300, width: 300 }
          }
        />
      ) : (
        <div
          className="avatar no-image z-4"
          style={{ height: size, width: size }}
        />
      )}
      <div
        style={{
          width: size,
          zIndex: "4",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          paddingTop: "10px",
        }}
      >
        <label className="button primary block cursor-pointer" htmlFor="single">
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
