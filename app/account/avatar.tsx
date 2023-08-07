// "use client";
// import React, { useEffect, useState } from "react";
// import { Database } from "@/types/supabase";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// type pages = Database["public"]["Tables"]["pages"]["Row"];

// export default function Avatar({
//   uid,
//   url,
//   size,
//   onUpload,
// }: {
//   uid: string | undefined;
//   url: pages["avatar_url"];
//   size: number;
//   onUpload: (url: string) => void;
// }) {
//   const supabase = createClientComponentClient<Database>();
//   const [avatarUrl, setAvatarUrl] = useState<pages["avatar_url"]>(url);
//   const [uploading, setUploading] = useState(false);

//   useEffect(() => {
//     async function downloadImage(path: string) {
//       try {
//         const { data, error } = await supabase.storage
//           .from("avatars")
//           .download(path);
//         if (error) {
//           throw error;
//         }

//         const url = URL.createObjectURL(data);
//         setAvatarUrl(url);
//       } catch (error) {
//         console.log("Error downloading image: ", error);
//       }
//     }

//     if (url) downloadImage(url);
//   }, [url, supabase]);

//   const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
//     event
//   ) => {
//     try {
//       setUploading(true);

//       if (!event.target.files || event.target.files.length === 0) {
//         throw new Error("You must select an image to upload.");
//       }

//       const file = event.target.files[0];
//       const fileExt = file.name.split(".").pop();
//       const filePath = `${uid}-${Math.random()}.${fileExt}`;

//       let { error: uploadError } = await supabase.storage
//         .from("avatars")
//         .upload(filePath, file);

//       if (uploadError) {
//         throw uploadError;
//       }

//       onUpload(filePath);
//     } catch (error) {
//       alert("Error uploading avatar!");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       {avatarUrl ? (
//         <iframe
//           width={size}
//           height={size}
//           src={avatarUrl}
//           className="avatar image"
//           style={{ height: size, width: size }}
//         />
//       ) : (
//         <div
//           className="avatar no-image z-4"
//           style={{ height: size, width: size }}
//         />
//       )}
//       <div
//         style={{
//           width: size,
//           zIndex: "4",
//           display: "flex",
//           justifyContent: "center",
//           cursor: "pointer",
//         }}
//       >
//         <label className="button primary block cursor-pointer" htmlFor="single">
//           {uploading ? "Uploading ..." : "Upload"}
//         </label>
//         <input
//           style={{
//             visibility: "hidden",
//             position: "absolute",
//           }}
//           type="file"
//           id="single"
//           accept="image/*"
//           onChange={uploadAvatar}
//           disabled={uploading}
//         />
//       </div>
//     </div>
//   );
// }
