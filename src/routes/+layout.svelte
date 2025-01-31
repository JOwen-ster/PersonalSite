<!--Refactor Layout-->


<script>
    // global css that the layout will pass on to its children
    import './global.css'
    import LayoutViewHeader from "../Components/LayoutViewHeader.svelte";
    import LayoutViewContent from "../Components/LayoutViewContent.svelte";
</script>

<style>
    /*local css applied only to this component*/

</style>

<div class="avatar-box">
    <img src="./assets/placeholder.jpg" alt="Profile" class="avatar"/>
</div>

<div class="container">
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

    <div class="main-window">
        <div class="main-window-header">

            <!--LayoutViewHeader Component-->
            <LayoutViewHeader/>

            <div class="main-window-buttons">
                <div class="circle green"></div>
                <div class="circle yellow"></div>
                <div class="circle red"></div>
            </div>
        </div>

        <div class="main-window-view">
            <!--LayoutViewContent Component-->
        </div>
    </div>
</div>

<slot></slot>