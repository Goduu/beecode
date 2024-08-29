"use server"

import { revalidateTag } from "next/cache"
import { createClient } from "../server"
import { User } from "../../auth/types"

export const fetchUserData = async () => {
  const supabase = createClient()
  const session = await supabase.auth.getUser()
  const metadata = session.data.user?.user_metadata

  const { data, error } = await supabase
    .from("user_current_data")
    .select("course, language, theme")
    .eq("user_id", session.data.user?.id)
    .single()

  if (error) {
    console.error("Error user data", error)
    return
  }

  if (!metadata) {
    console.error("Error fetching user data: No metadata")
    return null
  }

  if (!session.data.user?.id) return null

  const userData: User = {
    id: session.data.user?.id,
    name: metadata?.full_name || metadata.name,
    email: session.data.user?.email || metadata.email,
    avatarUrl: metadata.avatar_url,
    createdAt: session.data.user?.created_at,
    userName: session.data.user?.user_metadata?.user_name,
    currentCourse: data?.course,
    currentLanguage: data?.language,
    currentTheme: data?.theme,
  }

  return userData
}

export const revalidateUserData = async () => {
  revalidateTag("user-data")
}
