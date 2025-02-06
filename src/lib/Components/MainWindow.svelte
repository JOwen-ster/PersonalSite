<script>
import { page } from "$app/state";
import ProjectGrid from "$lib/Components/ProjectGrid.svelte";
import MainHeader from "$lib/Components/MainHeader.svelte";
import MainContactForm from "$lib/Components/MainContactForm.svelte";
</script>

<style>
    /* Main Window Flexbox */
    .main-window {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 25px;
        padding: 30px;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 0 15px rgb(0, 255, 255);
    }

    /* Main Window Flex Item */
    .main-window-view {
        height: 100%;
        padding: 20px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: none;
        overflow-y: auto;
        box-sizing: border-box;
    }
</style>

<div class="main-window">
    <MainHeader/>
    <div class="main-window-view">
        <!-- Render Check for Project Grid Component-->
        {#if page.url.pathname === "/Projects"}
            <ProjectGrid/>
        {:else if page.url.pathname === "/Contact"}
            <MainContactForm/>
        {:else}
            <!-- Add Styling -->
            {page.data.pageContent}
        {/if}
    </div>
</div>