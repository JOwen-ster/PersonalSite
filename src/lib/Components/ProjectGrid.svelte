<script>
    import { page } from "$app/state";
</script>

<style>
    .project-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        box-sizing: border-box;
    }

    .project-item {
        border: 5px solid darkorange;
        padding: 10px;
        transition: 0.3s ease-in-out;
    }

    .project-item:hover {
        border: 5px solid cyan;
        border-radius: 50px;
    }

    a {
        text-decoration: none;
    }

    .project-item > h2 {
        color: white;
        transition: 0.3s ease-in-out;
    }

    .project-item:hover > h2 {
        text-shadow: 0 0 10px cyan;
    }

    .project-item > p {
        color: mediumpurple;
    }
</style>

<div class="project-grid">
    {#each Object.values(page.data.projects) as project}
        <a href={project.url} target="_blank" rel="noopener noreferrer">
            <div class="project-item">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </a>
    {/each}
</div>