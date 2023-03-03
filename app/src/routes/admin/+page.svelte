<script>
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabase"
    import { onMount } from "svelte"
    import { adminContent } from "$lib/stores/contentStore"

    onMount(async () => {
        const { data } = await supabase.auth.getSession()
        if (!data.session) {
            goto("/")
        }
    })

    $: console.log($adminContent)
</script>

Admin Page !

{#each $adminContent as content}
    <li>
        <h1>{content.name}</h1>
    </li>
{/each}