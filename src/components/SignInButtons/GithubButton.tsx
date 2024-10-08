"use client"
import React, { FC } from "react"
import { Button } from "../Button"
import { firstLogInWithGithub, signInWithGithub } from "@/lib/auth/auth"
import { FaGithub, ImSpinner } from "../Svgs/Icons"
import { useLocaleContext } from "../Localization/LocaleContext"
import { loginModalStore } from "../LoginModal.store"
import { useStore } from "../useStore"
import { useTransitionContext } from "../Loading.store"

export const GithubButton: FC = () => {
  const { locale } = useLocaleContext()
  const firstLoginData = useStore(loginModalStore, (state) => state.firstLoginData)
  const { startTransition } = useTransitionContext()

  const handleSignIn = () => {
    if (firstLoginData) {
      startTransition(async () => firstLogInWithGithub(firstLoginData))
    } else {
      startTransition(async () => signInWithGithub())
    }
  }

  return (
    <Button onClick={handleSignIn} className="flex items-center gap-2">
      <FaGithub className="w-5" />
      {T[locale].continueWithGithub}
    </Button>
  )
}

const en = {
  continueWithGithub: "Continue with GitHub",
}
const es = {
  continueWithGithub: "Continuar con GitHub",
}
const fr = {
  continueWithGithub: "Continuer avec GitHub",
}
const de = {
  continueWithGithub: "Mit GitHub fortfahren",
}
const pt = {
  continueWithGithub: "Continuar com o GitHub",
}
const T = {
  en,
  es,
  fr,
  de,
  pt,
}
