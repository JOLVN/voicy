<script>
    export let handleClick, type
</script>

<button on:click={handleClick} class={type}>
    <slot/>
</button>
