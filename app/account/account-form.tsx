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
const revalidate = 0;
interface UpdatePagesParams {
  title: string | null;
  href: string | null;
  text: string | null;
  avatar: any | null;
  created_at?: any | null;
}
export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [messg, setMessg] = useState("there was an error while deleting");
  const [title, setTitle] = useState<any | null>(null);
  const [text, setText] = useState<any | null>(null);
  const [avatar, setAvatar] = useState<any | null>(null);
  const [href, setHref] = useState<any | null>("");
  const user = session?.user;
  const [allData, setAllData] = useState<any[] | null>([]);
  // const [time, setTime] = useState<any | null>(null);

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
        // setTime(data.created_at);
      } else {
        setTitle(null);
        setHref(null);
        setText(null);
        setAvatar(null);
        // setTime(null);
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
        .select(`title, href, text, avatar, created_at,id`) // <-- Add "created_at" here
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
    revalidate;
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
  // --------- CREATE PAGE  -----------------

  async function createPages({
    title,
    text,
    href,
    avatar,
    created_at,
  }: UpdatePagesParams) {
    try {
      setLoading(true);
      if (user) {
        let { data, error } = await supabase.from("pages").insert({
          title,
          text,
          href,
          avatar,
          created_at,
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
  // --------- DELETE PAGES  -----------------
  async function deletePages({ title, avatar, text, href }: UpdatePagesParams) {
    try {
      let { data, error } = await supabase
        .from("pages")
        .delete()
        .or(
          `title.eq.${title},avatar.eq.${avatar},text.eq.${text},href.eq.${href}`
        );
      if (error) {
        throw error;
      }

      let { error: removeError } = await supabase.storage
        .from("avatars")
        .remove([avatar]);
      if (removeError) {
        throw removeError;
      }
    } catch (error) {
      console.error(error);
    }
    const showToastMessage = () => {
      toast.success("Page Deleted", {
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

  // ...

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
      {user && (
        <div className=" backgroundOverlay2 w-full pt-[6rem] flex flex-row z-4 relative items-center justify-center h-screen font-bold  text-[#315a26d8] gap-4">
          {/* ------------------------------------------------- */}
          <div className="h-full overflow-y-scroll w-[70%]">
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col mb-4">
                <label className="mb-4 " htmlFor="username">
                  Naslov zavihka: {title}
                </label>
                <input
                  className="p-2 w-[500px]"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={title === null ? "" : title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="justify-center items-center  flex w-full">
              <div className="">
                <div className="flex justify-center items-center">
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
            </div>
            <div className="w-full items-center flex justify-center ">
              <div className="flex justify-center flex-col">
                <label className="mb-[5px] pb-[10px] " htmlFor="username">
                  {`${location.origin ? location.origin : ""}/${
                    href === null ? "" : href.slice(0, 20)
                  }`}
                </label>

                <input
                  className="p-2 w-[500px]"
                  type="text"
                  name="href"
                  id="href"
                  value={href === null ? "" : href}
                  onChange={(e) => setHref(e.target.value)}
                  maxLength={20}
                  placeholder="med presledki _ primer(a_p_k)"
                ></input>
                <span className="text-[12px] text-white">
                  URL končnica naj bo kratka vsobovati mora maximalno 20 črk
                  <br />
                  in ne sme vsebovati (ć,ž,š...)
                </span>
              </div>
            </div>

            <div className=" w-[100%] flex justify-center overflow-hidden h-auto">
              <div className="overflow-y-scroll pt-[4rem] w-[500px]">
                <textarea
                  className=" h-[10rem] w-[500px] p-[2%] overflow-wrap: break-word; word-break: break-all;"
                  onChange={(e) => setText(e.target.value)}
                  value={text === null ? "" : text}
                  maxLength={6000}
                />
              </div>
            </div>
            <div className="text-white flex justify-center flex-col items-center pt-[1rem] pb-[1rem] ">
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
              <div>
                <form action="/auth/singout" method="post">
                  <button className="button block" type="submit">
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------- */}
          <div className="w-auto h-full items-center  border-l  flex flex-col  border-white">
            <button className="text-white text-sm  w-auto text-justify	">
              {allData?.map((item, index) => (
                <div
                  className="p-4 hover:underline"
                  key={item.id}
                  onClick={() => {
                    setTitle(item.title);
                    setHref(item.href);
                    setText(item.text);
                    setAvatar(item.avatar);
                  }}
                >
                  <h2>{item.title}</h2>
                </div>
              ))}
            </button>
            <button onClick={() => deletePages({ title, avatar, text, href })}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}
