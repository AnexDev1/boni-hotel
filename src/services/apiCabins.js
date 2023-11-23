import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("cabins could not be loaded");
    throw new Error("could not load cabin");
  }

  return data;
}
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    console.error("cabins could not be created");
    throw new Error("could not create cabin");
  }
  return data;
}
export async function updateCabin(id) {}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error("cabins could not be deleted");
    throw new Error("could not delete cabin");
  }
  return data;
}
