<script>
    import ProjectCard from '../../components/ProjectCard.svelte';
    export let data;
</script>
<style>
    h1 {
        text-align: center;
    }
</style>
<section class="styled-container">
    <h1>Our Projects</h1>
    <div class="card-container">
        {#each data.projects as project}
            <ProjectCard project={project} />
        {/each}
    </div>
</section>
