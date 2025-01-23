<script>
    import './style.css';
	let { children } = $props();
</script>

<nav class="main-navbar">
    <a href="./">Home</a>
    <a href="./About">About</a>
    <a href="./Projects">Projects</a>
    <a href="./TechStack">Tech Stack</a>
    <a href="./Contact">Contact</a>
</nav>

{@render children()}

<div class="part part-img"></div>