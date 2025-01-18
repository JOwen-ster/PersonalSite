<script>
	let { children } = $props();
</script>

<nav>
    <a href="../">Home</a>
    <a href="../About">About</a>
    <a href="../Projects">Projects</a>
    <a href="../TechStack">Website Tech Stack</a>
    <a href="../Contact">Contact</a>
</nav>

{@render children()}