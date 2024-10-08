"use client"
import { useEffect, useState } from "react"
import { useStore } from "../useStore"
import { goToNextActivity, unitStore } from "../Unit/unitStore"
import { useLocaleContext } from "../Localization/LocaleContext"
import { Activity } from "@contentlayer/generated"
import { saveFinishedLesson } from "./ActivityBlock.functions"
import { useRouter } from "next/navigation"
import { LessonState } from "./types"
import { routes } from "@/lib/routes"

type QuizStateProps = {
  lessonXp: number
  activityMap: Map<string, Activity>
}

export const useQuizState = ({ lessonXp, activityMap }: QuizStateProps) => {
  const { locale } = useLocaleContext()
  const [onGoingActivityData, setOnGoingActivityData] = useState<Activity | null>(null)
  const [lessonState, setLessonState] = useState<LessonState>("none")
  const onGoingUnitSlug = useStore(unitStore, (state) => state.onGoingUnitSlug)
  const onGoingLessonSlug = useStore(unitStore, (state) => state.onGoingLessonSlug)
  const onGoingLessonToDoActivities = useStore(unitStore, (state) => state.onGoingLessonToDoActivities)
  const onGoingActivitySlug = useStore(unitStore, (state) => state.onGoingActivitySlug)
  const router = useRouter()

  useEffect(() => {
    if (!onGoingActivitySlug || !activityMap) return

    const activityData = activityMap.get(onGoingActivitySlug)

    activityData && setOnGoingActivityData(activityData)
  }, [activityMap, onGoingActivitySlug])
  const handleGotToNextActivity = () => {
    setLessonState("none")
    if (onGoingLessonToDoActivities?.size === 1) {
      setLessonState("completed")
    }
    goToNextActivity()
  }

  const handleFinishLesson = async () => {
    if (!onGoingLessonSlug || !onGoingActivityData) return

    const saveLessonPromise = saveFinishedLesson(
      onGoingActivityData?.course,
      onGoingUnitSlug,
      onGoingLessonSlug,
      lessonXp,
    )
    const redirectPromise = router.push(routes.path(locale))

    // Run both operations at the same time
    await Promise.allSettled([saveLessonPromise, redirectPromise])
  }

  return {
    locale,
    onGoingActivityData,
    lessonState,
    isActionDisabled: lessonState === "correct" || lessonState === "wrong" || lessonState === "completed",
    setLessonState,
    handleGotToNextActivity,
    handleFinishLesson,
  }
}
