<script>
    let email, password = ''
    const signin = async () => {

    }

</script>

<form on:submit|preventDefault={signin}>
    <label for="email">Email</label>
    <input type="email" bind:value={email} />
    <label for="password">Password</label>
    <input type="password" bind:value={password} />
    <button>
        Login
    </button>
</form>