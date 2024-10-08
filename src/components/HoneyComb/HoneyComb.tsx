"use client"
import React, { FC } from "react"
import { FiHexagon, GiHoneypot } from "../Svgs/Icons"
import { Unit, UnitContent } from "@contentlayer/generated"
import { open } from "./UnitHoneyCombModal.store"
import { TooltipHover } from "../TooltipHover"
import { useStore } from "zustand"
import { unitStore } from "../Unit/unitStore"
import { useLocaleContext } from "../Localization/LocaleContext"

type HoneyCombProps = {
  unit: Unit
  unitContent: UnitContent | undefined
  size?: "small" | "medium" | "large"
}

export const HoneyComb: FC<HoneyCombProps> = ({ unit, unitContent, size = "medium" }) => {
  const { locale } = useLocaleContext()
  const completedLessons = useStore(unitStore, (state) => state.completedLessons)
  const completed = unit.lessonRefs.every((lessonRef) => completedLessons.has(lessonRef.lesson))
  const hexagonSize = size === "medium" ? "w-24" : size === "small" ? "w-14" : "w-32"
  const honeySize = size === "medium" ? "w-10" : size === "small" ? "w-6" : "w-14"

  return (
    <TooltipHover text={unit.description[locale]} position="bottom">
      <div className="relative cursor-pointer hover:scale-105" onClick={() => open(unitContent, unit)}>
        <FiHexagon
          className={`${hexagonSize} p-0 ${completed ? "fill-amber-500 text-amber-600" : "fill-slate-200 text-slate-500 dark:fill-slate-500 dark:text-slate-600"}`}
        />
        <GiHoneypot className={`${honeySize} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform`} />
      </div>
    </TooltipHover>
  )
}
