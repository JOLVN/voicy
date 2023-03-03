<script>
	import { goto } from '$app/navigation'
	import { supabase } from '$lib/supabase'
	import { onMount } from 'svelte'
	import { adminContent } from '$lib/stores/contentStore'

	export let data
	const { samplePosts, users } = data

	onMount(async () => {
		const { data } = await supabase.auth.getSession()
		if (!data.session) {
			goto('/')
		}
	})

	console.log(samplePosts);

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Voicy" />
</svelte:head>

<section>

	{#each samplePosts as samplePost}
		<li>
			<h1>{samplePost.name}</h1>
		</li>
	{/each}

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
