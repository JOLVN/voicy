import '$lib/supabase'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

// export const handle = async ({ request, resolve }) => {
//     const { session, supabaseClient } = await getSupabase(request)
//     request.locals.supabaseClient = supabaseClient
//     request.locals.session = session
//     return resolve(request)
// }