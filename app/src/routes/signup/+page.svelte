<script>

    let email, password, verifyPassword = ''
    const signup = async () => {
        if (password !== verifyPassword) {
            alert('Passwords do not match')
            return
        }

    }

</script>

<form on:submit|preventDefault={signup}>
    <label for="email">Email</label>
    <input type="email" bind:value={email} />
    <label for="password">Password</label>
    <input type="password" bind:value={password} />
    <label for="verifyPassword">Verify password</label>
    <input type="verifyPassword" bind:value={verifyPassword} />
    <button>
        Login
    </button>
</form>