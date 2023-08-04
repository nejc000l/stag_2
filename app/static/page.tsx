import supabase from "@/utils/supabase";

export default async function Posts() {
  const { data } = await supabase.from("pages").select("*");
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
