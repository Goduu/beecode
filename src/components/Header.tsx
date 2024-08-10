import Link from 'next/link'
import React from 'react'
import { Beecodee, BeeHead, BiLogIn, RiJavascriptFill } from './Icons'
import { IconButton } from './IconButton'
import { userMetadata } from '@/lib/auth'
import { TooltipHover } from './TooltipHover'

export const Header = async () => {
    const userData = await userMetadata()

    return (
        <header className='flex items-center w-full justify-between'>
            <Link href={"/"}>
                <Beecodee className="w-44 sm:w-72" />
            </Link>
            <div className='flex items-center gap-2'>
                {!userData ?
                    <IconButton>
                        <Link href={"/login"}>
                            <BiLogIn className="w-16 pr-5" />
                        </Link>
                    </IconButton>
                    :
                    <TooltipHover text={userData.name} position='bottom'>
                        <IconButton color='secondary'>
                            <BeeHead className="w-16 pr-5" />
                        </IconButton>
                    </TooltipHover>
                }

                <TooltipHover text={"JS"} position='bottom'>
                    <IconButton color='secondary'>
                        <RiJavascriptFill className="w-16 pr-5" />
                    </IconButton>
                </TooltipHover>
            </div>
        </header>
    )
}
