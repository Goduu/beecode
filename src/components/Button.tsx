"use client"
import React, { FC, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    className?: string
    disabled?: boolean
    ping?: boolean
    color?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, className, disabled, ping = false, size, color = "primary", onClick }) => {

    const handleClicks = () => {
        if (disabled) return
        onClick?.()
    }

    return (
        <form action={handleClicks} className='h-12'>
            <button type="submit"
                className={`
                    relative hover:mt-1
                    duration-150
                    border-2 border-b-4 hover:border-b-2 rounded-md
                    font-bold hover:shadow-sm h-fit p-2
                    ${size === "small" && "p-[3px] text-xs"}
                    ${color === "primary" && "bg-amber-500 text-gray-50 border-amber-600"}
                    ${color === "secondary" && "text-slate-900 dark:text-gray-50 text-current border-gray-300 "}
                    disabled:scale-100 disabled:bg-slate-500 disabled:border-slate-500 disabled:border-b-4 disabled:mt-0
                    ${className}
                    `}
                disabled={disabled}>
                <Ping ping={ping} />
                {children}
            </button>
        </form>
    )
}

const Ping: FC<{ ping: boolean }> = ({ ping }) => {
    return (
        <div className='absolute -right-1 -top-1'>
            <span className={`${ping ? "opacity-100" : "opacity-0"} relative flex h-3 w-3`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full border dark:bg-slate-50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-slate-50 "></span>
            </span>
        </div>
    )
}
