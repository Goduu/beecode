import React from "react"
import { SiJavascript } from "./Svgs/Icons"
import { IconButton } from "./IconButton"
import { signOut, userMetadata } from "@/lib/auth"
import { TooltipHover } from "./TooltipHover"
import { XpollenHeader } from "./XPollen/XpollenHeader"

export const Header = async () => {
  const userData = await userMetadata()

  return (
    <header className="absolute top-2 flex w-full items-center justify-center px-10 sm:justify-between">
      <div className="flex w-screen items-center justify-end gap-2">
        <TooltipHover text={"Javascript"} position="bottom">
          <IconButton color="secondary">
            <SiJavascript className="w-14 pr-5" />
          </IconButton>
        </TooltipHover>
        <XpollenHeader />
      </div>
    </header>
  )
}
