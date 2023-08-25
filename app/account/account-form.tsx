"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Navbar from "@/components/Navbar";
import Avatar from "./avatar";
import { url } from "inspector";
interface UpdatePagesParams {
  title: any | null;
  href: string | null;
  text: any | null;
  avatar: any | null;
  created_at: any | null;
}
export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [messg, setMessg] = useState("");
  const [title, setTitle] = useState<any | null>(null);
  const [text, setText] = useState<any | null>(null);
  const [avatar, setAvatar] = useState<any | null>(null);
  const [href, setHref] = useState<any | null>("");
  const user = session?.user;
  const [allData, setAllData] = useState<any | null>();

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("pages")
        .select(`title, href, text, avatar,created_at`)
        .eq("profile_id", user?.id)
        .order("id", { ascending: false })
        .limit(1)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setTitle(data.title);
        setHref(data.href);
        setText(data.text);
        setAvatar(data.avatar);
      } else {
        setTitle(null);
        setHref(null);
        setText(null);
        setAvatar(null);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    async function fetchProfile() {
      const { data, error } = await supabase
        .from("pages")
        .select(`title, href, text, avatar, created_at`) // <-- Add "created_at" here
        .eq("profile_id", user?.id)
        .order("id", { ascending: false });

      if (error) {
        throw error;
      }

      console.log(data);
      setAllData(data);
    }

    fetchProfile();
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updatePages({
    title,
    text,
    href,
    avatar,
    created_at,
  }: UpdatePagesParams) {
    try {
      setLoading(true);
      if (user) {
        let { data, error, count } = await supabase
          .from("pages")
          .update({
            title,
            text,
            href,
            avatar,
            created_at,
          })
          .match({ profile_id: user.id })
          .order("id", { ascending: false })
          .limit(1)
          .single();
        // console.log(`Updated ${count} rows`);
        if (error) {
          console.error(error);
          throw error;
        }
      }
    } catch (error) {
      console.error(error);
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }
  const updatePageF = async (params: UpdatePagesParams) => {
    updatePages(params);

    const showToastMessage = () => {
      toast.success("Page updated!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
    showToastMessage();
  };

  async function createPages({ title, text, href, avatar }: UpdatePagesParams) {
    try {
      setLoading(true);
      if (user) {
        // console.log("Inserting data:", {
        //   title,
        //   text,
        //   href,
        //   avatar,
        //   profile_id: user.id,
        // });
        let { data, error } = await supabase.from("pages").insert({
          title,
          text,
          href,
          avatar,

          profile_id: user.id,
        });
        if (error) {
          throw error;
        }
      }
    } finally {
      setLoading(false);
    }
    // ...

    const showToastMessage = () => {
      toast.success("Page Created!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
    showToastMessage();
  }

  return (
    <>
      <div className="w-full h-full">
        <Navbar
          toggleAuth={function (): void {
            throw new Error("Function not implemented.");
          }}
          session={null}
        />
      </div>

      <div className=" pt-[6rem] flex flex-col z-4 relative items-center justify-center h-screen text-[#2b671cd8] gap-4">
        <div className="h-full overflow-y-scroll">
          <div className="w-full flex items-center justify-center">
            {user && (
              <div>
                <label className="m-4" htmlFor="username">
                  title: {title}
                </label>
                <input
                  className="p-2"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={title === null ? "" : title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="justify-center items-center  flex w-full">
            {user && (
              <div>
                <div className="flex justify-center">
                  <Avatar
                    uid={user.id}
                    url={avatar}
                    size={150}
                    onUpload={(url) => {
                      setAvatar(url);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="w-full items-center flex justify-center ">
            {user && (
              <div className="flex justify-center ">
                <label className="m-4" htmlFor="username">
                  {`${location.origin ? location.origin : ""}/${
                    href === null ? "" : href.slice(0, 20)
                  }`}
                </label>

                <input
                  className="p-2 w-96"
                  type="text"
                  name="href"
                  id="href"
                  value={href === null ? "" : href}
                  onChange={(e) => setHref(e.target.value)}
                  maxLength={20}
                  placeholder="URL vsebovati mora _med presledki"
                ></input>
              </div>
            )}
          </div>
          <div className="w-ful flex overflow-hidden h-auto">
            {user && (
              <div className="overflow-y-scroll	">
                <h4 className="m-4 w-[20rem] break-words">{text}</h4>
                <textarea
                  className="w-[20rem] h-[10rem] p-[10px] overflow-wrap: break-word; word-break: break-all;"
                  onChange={(e) => setText(e.target.value)}
                  value={text === null ? "" : text}
                  maxLength={6000}
                />
              </div>
            )}
          </div>
          <div className="text-white">
            <button
              onClick={() =>
                updatePageF({
                  title: title,
                  href: href,
                  text: text,
                  avatar: avatar,
                  created_at: new Date(),
                })
              }
            >
              Update
            </button>

            <ToastContainer
              className="toaster-container"
              position="top-center"
              autoClose={111111100}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
          <div className="text-white">
            <button
              onClick={() =>
                createPages({
                  title,
                  text,
                  href,
                  avatar,
                  created_at: new Date(),
                })
              }
            >
              Create Page,
            </button>
          </div>
          <div className="text-white">
            <form action="/auth/singout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
