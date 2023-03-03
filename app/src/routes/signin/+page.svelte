<script>
    import { supabase } from '$lib/supabase'

    let email, password = ''
    const signin = async () => {
        const { user } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        console.log(user);
        if (user) {
            // User is signed in, now redirect to admin page
            
        }
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