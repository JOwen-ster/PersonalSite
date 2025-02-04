<script>
    import { page } from "$app/state";
</script>

<style>
    .project-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .project-item {
        border: 5px solid #FFF;
        padding: 10px;
        transition: 0.3s ease-in-out;
    }

    .project-item:hover {
        border: 5px solid cyan;
        color: black;
    }

</style>

<div class="project-grid">
    {#each Object.values(page.data.projects) as project}
        <div class="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url}>Link</a>
        </div>
    {/each}
</div>