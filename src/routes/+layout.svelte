<!--Refactor Layout-->


<script>
    // global css that the layout will pass on to its children
    import './global.css'
    import LayoutViewHeader from "../Components/LayoutViewHeader.svelte";
    import LayoutViewContent from "../Components/LayoutViewContent.svelte";
    import ProjectGrid from "../Components/ProjectGrid.svelte";
    let showNavbar = $state(true);
    function toggleNavbar() {
        showNavbar = !showNavbar;
    }
    let { children } = $props();
    import { page } from '$app/state'
</script>

<style>
    /*local css applied only to this component*/
    .toggle-button {
        background: rgba(255, 255, 255, 0.05);
        color: darkorange;
        border: 5px solid transparent;
        border-radius: 25px;
        box-shadow: 0 0 15px rgb(0, 255, 255);
        padding: 10px;
        transition: 0.3s ease-in-out;
    }

    .toggle-button:hover     {
        background: rgba(255, 255, 255, 0.1);
        scale: 1.1;
    }
</style>

<!--<div class="avatar-box">-->
<!--    <img src="./assets/placeholder.jpg" alt="Profile" class="avatar"/>-->
<!--</div>-->

<div class="centered-content">
    <div class="container">
        {#if showNavbar}
            <div class="side-navbar">
                <div class="frame">
                    <div class="side-navbar-icon">☰</div>
                </div>

                <div class="side-navbar-menu">
                    <a class="side-navbar-option" href="./">Home</a>
                    <a class="side-navbar-option" href="./About">About</a>
                    <a class="side-navbar-option" href="./Projects">Projects</a>
                    <a class="side-navbar-option" href="./TechStack">Tech Stack</a>
                    <a class="side-navbar-option" href="./Contact">Contact</a>
                </div>
            </div>
        {/if}

        <div class="main-window">
            <div class="main-window-header">

                <!--LayoutViewHeader Component-->
                <LayoutViewHeader/>
                <!--If page is About, show scrolling images of my languages-->
                <!--If page is Projects, show project grid-->

                <div class="main-window-buttons">
                    <div class="circle green"></div>
                    <div class="circle yellow"></div>
                    <div class="circle red"></div>
                </div>
            </div>

            <div class="main-window-view">
                <!--LayoutViewContent Component-->
                {#if page.url.pathname === "/Projects"}
                    <ProjectGrid/>
                {:else}
                    <LayoutViewContent/>
                {/if}
            </div>
        </div>
    </div>

    <button class="toggle-button" onclick={toggleNavbar}>
        {showNavbar ? "Hide Sidebar" : "Show Sidebar"}
    </button>

</div>

{@render children()}