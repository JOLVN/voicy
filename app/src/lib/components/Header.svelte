<script>
	import AuthButtons from './auth/AuthButtons.svelte'
    import { goto } from '$app/navigation'
</script>

<header>

	<div class="logo">
		<span id="img_logo"></span>
		<h1 on:click={() => goto('/')}>VOICY</h1>
	</div>

	<AuthButtons />
	
</header>

<style>
</style>
