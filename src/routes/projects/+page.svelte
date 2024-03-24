<script>
    import ProjectCard from '../../components/ProjectCard.svelte';
    export let data;
</script>
<style>
    h1 {
        text-align: center;
    }
</style>

<svelte:head>
    <title>Check Out Some of Our Previous Projects </title>
    <meta name="description" content="Learn about projects we've completed, including before and after pictures." />
</svelte:head>

<section class="styled-container">
    <h1>Our Projects</h1>
    <div class="card-container">
        {#each data.projects as project}
            <ProjectCard project={project} />
        {/each}
    </div>
</section>
