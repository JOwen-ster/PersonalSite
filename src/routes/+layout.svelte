<!--Refactor Layout-->
<!--
* Take out Tech Stack and put that info on the homepage
* Add icons for ever skill I have
{ Python, C++, Java, Bash, Assembly,
HTML, CSS, JS, Svelte,
VSC, WebStorm, GitHub, Git }
-->

<script>
    // global css that the layout will pass on to its children
    import './global.css'
    import MainNavbar from "$lib/Components/MainNavbar.svelte";
    import MainWindow from "$lib/Components/MainWindow.svelte";
    let showNavbar = $state(true);
    function toggleNavbar() {
        showNavbar = !showNavbar;
    }
    let { children } = $props();
</script>

<style>
    /*local css applied only to this Page*/
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
            <MainNavbar/>
        {/if}

        <MainWindow/>
    </div>

    <!--
    Hamburger icon should be clickable
    so when the sidebar disappears then the hamburger
    transfers to the main window and vice versa.
     -->
    <button class="toggle-button" onclick={toggleNavbar}>
        {showNavbar ? "Hide Sidebar" : "Show Sidebar"}
    </button>

</div>

{@render children()}