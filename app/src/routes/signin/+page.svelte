<script>
    import Button from '$lib/components/Utils/Button.svelte'

    let email, password = ''
    const signin = async () => {

    }

</script>

<form on:submit|preventDefault={signin}>
    <label for="email">Email</label>
    <input type="email" bind:value={email} />
    <label for="password">Password</label>
    <input type="password" bind:value={password} />
    <Button type="outlined">
        Sign in
    </Button>
</form>