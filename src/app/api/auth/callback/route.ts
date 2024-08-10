import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import { createClient } from 'src/lib/supabase/server'
// The client you created from the Server-Side Auth instructions

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = createClient()
        const { data, error } = await supabase.auth.exchangeCodeForSession(code)
        
        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                redirect(next)
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                // return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                redirect(next)
                // return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                redirect(next)
                // return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}