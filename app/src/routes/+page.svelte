<script>
    import SamplePostCard from "../lib/components/samplePosts/SamplePostCard.svelte"
	export let data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Voicy" />
</svelte:head>

<section>

	<h1>Latest samples</h1>

	{#each data.samplePosts as samplePost}
		<SamplePostCard {samplePost} />
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
