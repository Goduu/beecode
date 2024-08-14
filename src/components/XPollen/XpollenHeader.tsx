import React, { FC } from 'react'
import { IconButton } from '../IconButton'
import { Pollen } from '../Icons'
import { fetchUserXpollen } from '@/lib/supabase/api/fetchUserXpollen'

export const XpollenHeader: FC = async () => {
    const userXpollen = await fetchUserXpollen()

    return (
        <IconButton className='flex items-center gap-1'>
            <Pollen className="w-10" />
            <div className='text-amber-500 text-xl'>
                {userXpollen || 0}
            </div>
        </IconButton>
    )
}
