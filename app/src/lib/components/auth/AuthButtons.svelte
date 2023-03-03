<script>
    import { goto } from '$app/navigation'
    import Button from '../Utils/Button.svelte'
</script>

<div class="authButtons">
    <Button type="text" handleClick={() => goto('/signup')}>Sign up</Button>
    <Button type="filled" handleClick={() => goto('/signin')}>Sign in</Button>
</div>