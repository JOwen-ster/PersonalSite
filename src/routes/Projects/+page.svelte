<script>
    import { pageTitle } from '$lib/stores.js';
    import { onMount } from 'svelte'

    onMount( () => {
        pageTitle.set("Projects");
    });
</script>

<p>Here are my projects!</p>