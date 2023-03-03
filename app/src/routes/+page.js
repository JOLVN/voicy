import { supabase } from '$lib/supabase'

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {

    const getSamplePosts = async () => {
        const { data, error } = await supabase
            .from('sample_posts')
            .select('*, user:users(*)')
        if (error) {
            console.error(error)
        }
        if (data) {
            return data
        }
    }

    const getUsers = async () => {
        const { data, error } = await supabase
            .from('users')
            .select()
        if (error) {
            console.error(error)
        }
        if (data) {
            return data
        }
    }

    return {
        samplePosts: await getSamplePosts(),
        users: await getUsers()
    }
}