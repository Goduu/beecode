"use server"
import { fetchCachedUserData } from "@/lib/supabase/api/fetchUserData"
import { createClient } from "src/lib/supabase/server"
import { revalidateUserXpollen } from "./fetchUserXpollen"

export type CompletedLessonByUnitId = {
  [unitId: string]: string[]
}
export const deleteUserProgress = async () => {
  const userData = await fetchCachedUserData()
  const supabase = createClient()

  if (!userData) return
  const { data, error } = await supabase.rpc("delete_user_xpollen_entries")

  if (error) {
    console.error("Error deleting user progress", error)
    return
  }

  revalidateUserXpollen()

  return true
}
