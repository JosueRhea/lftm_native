import { SupabaseContext } from "@/context/sp-context";
import { useContext } from "react";

export const useSupabase = () => useContext(SupabaseContext);
