import { ProfilePage } from "@/components/Pages/ProfilePage"
import { fetchCachedUserData } from "@/lib/supabase/api/fetchUserData"
import { fetchUserCompletedLessonByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"
import { fetchUserXpollen } from "@/lib/supabase/api/fetchUserXpollen"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile Page",
  keywords: ["profile", "page", "beecodee", "user"],
}

export default async function Profile() {
  const userData = await fetchCachedUserData()
  const userXpollen = await fetchUserXpollen()
  const userFinishLessons = await fetchUserCompletedLessonByUnitId()

  return <ProfilePage userData={userData} userXpollen={userXpollen} userFinishLessons={userFinishLessons} />
}
