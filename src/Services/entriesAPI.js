import { supabase } from "./supabase";

export async function createEntry(payload) {
  const { data, error } = await supabase
    .from("entries")
    .insert([payload])
    .select();

  return data;
}

export async function getEntries() {
  console.log("inside getEntries");
  let { data, error } = await supabase.from("entries").select("*");
  console.log(error);
  console.log(data);

  return data;
}
