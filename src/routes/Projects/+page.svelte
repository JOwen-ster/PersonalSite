<script>
    import { pageTitle } from '$lib/stores.js';
    import { onMount } from 'svelte';

    onMount(() => {
        pageTitle.set("This is my Tech Stack!");
    });
</script>

<p>Here are my projects!</p>