<style>
    /*local css has priority over global css since this component is using a scoped <style>, not importing */
</style>

<script>
    import Structure from '../../Components/Structure.svelte';
    let paragraph = "Made with ❤️ using SvelteKit"
</script>


<Structure
        pageTitle={'Tech Stack'}
        pageContent = {paragraph}
/>