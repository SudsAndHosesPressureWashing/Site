<script lang="ts">
	import type { PageData } from './$types';
	import ServicesMarker from '../components/ServicesMarker.svelte';
    import ServiceCard from '../components/ServiceCard.svelte'
    import ProjectCard from '../components/ProjectCard.svelte';
	import { each } from 'svelte/internal';
	export let data: PageData;
</script>

<style>

    section {
        margin: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 2rem;
        /* backdrop-filter: var(--backdrop-filter);
        background-color: var(--bg-color); */
        
    }
    .intro {
        margin-top: calc(5vw);
    }

    .main-title {
        text-align: center;
    }

    .services {
        height: calc(110vh);
        /* margin-top: 200px; */
        border-radius: 20px;
        opacity: 0;
        animation: fade-in linear forwards;
        
        animation-timeline: view();
        animation-range-start: contain -180px;
        animation-range-end: contain; /*75vh;*/
        
    }

    .services > h2 {
        color: white;
        position: fixed;
        top: 50vh;
        left: 35vw;
        text-align: center;
        background-color: var(--bg-color);
        backdrop-filter: var(--backdrop-filter);
        box-shadow: 10px 15px color-mix(in srgb, var(--primary-hover) 70%, transparent);
    }

    .markers-container {
        display: inline-block;
    }

    .cards-container {
        display: none;
    }

    @media (max-width: 680px) {
        .services {
            margin-block: 50px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 1rem;
            animation: none;
            opacity: 1;
            height: auto;
            border-radius: 0;
            background-color: var(--bg-color);
            backdrop-filter: var(--backdrop-filter);
            box-shadow: 10px 15px color-mix(in srgb, var(--primary-hover) 70%, transparent);
        }

        .services > h2 {
            position: inherit;
            width: 100%;
            background-color: rgba(0,0,0,0);
            backdrop-filter: none;
            box-shadow: none;
        }



        .markers-container {
            display: none;
        }

        .cards-container {
            display: inline-block;
        }

	}

    @keyframes fade-in {
        /* from {opacity: 0;} */
        20% {opacity: 1;}
        70% {opacity: 1;}
        100% {opacity: 0;}
    }

    .projects {
        margin-bottom: 3rem;
    }
    
    .projects > h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .projects-container {
        
        display: flex;
        gap: 1rem;
        justify-content: space-around;
    }

</style>

<section class="intro styled-container ">
	<h1 class="main-title">Welcome to {data.company.name}</h1>
	<p>{data.company.excerpt}</p>
</section>
<!-- <section class="down">^</section> -->
<section class="services">
    <h2>Some of Our Services</h2>
    {#each data.services as service}
        {#if service.includeDesktop}
            <div class="markers-container">
                <ServicesMarker service={service}/>
            </div>
        {/if}
        {#if service.includeMobile}
            <div class="cards-container">
                <ServiceCard service={service}/>
            </div>
        {/if}
    {/each}
</section>
<section class="styled-container projects">
    <h2>Our Previous Projects</h2>
    <div class="projects-container">
        {#each data.projects as project}
            {#if project.includeHomePage}
                <ProjectCard project={project} />
            {/if}
        {/each}
    </div>
</section>
