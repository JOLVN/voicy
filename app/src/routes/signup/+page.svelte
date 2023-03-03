<script>
    import { supabase } from '$lib/supabase'
    import { PUBLIC_APP_DOMAIN } from '$env/static/public'

    let email, password, verifyPassword = ''
    const signup = async () => {
        if (password !== verifyPassword) {
            alert('Passwords do not match')
            return
        }
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: `${PUBLIC_APP_DOMAIN}/admin`
            }
        })

        if (error) {
            alert(error.message)
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