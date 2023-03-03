import { supabase } from "$lib/supabase"
import { writable } from 'svelte/store'

export const adminContent = writable({})

export const loadAdminContent = async () => {
    const { data, error } = await supabase
        .from('sample_posts')
        .select('*')
    if (error) {
        console.error(error)
    }
    if (data) {
        adminContent.set(data)
    }
}

loadAdminContent()