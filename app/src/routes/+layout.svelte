<script>
	import { invalidateAll } from '$app/navigation'
	import { supabase } from '$lib/supabase'
	import { onMount } from 'svelte'
	import Header from '$lib/components/Header.svelte'
	import './styles.css'

	onMount(() => {
		const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
			console.log('event', event)
			console.log('session', session)
			invalidateAll()
		})

		return () => {
			subscription.unsubscribe()
		}
	})

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Voicy</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
