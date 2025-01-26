<script>
    // global css that the layout will pass on to its children
    import './global.css';
    let { children } = $props();
</script>

<style>
    /*local css*/
    h1 {
        color: magenta;
    }
</style>

<nav class="main-navbar">
    <a href="./">Home</a>
    <a href="./About">About</a>
    <a href="./Projects">Projects</a>
    <a href="./TechStack">Tech Stack</a>
    <a href="./Contact">Contact</a>
</nav>

<h1>Hello</h1>
<div class="avatar-box">
    <img src="./assets/tojiwoohoo.jpg" alt="Profile" class="avatar"/>
</div>


{@render children()}

<div class="part part-img"></div>