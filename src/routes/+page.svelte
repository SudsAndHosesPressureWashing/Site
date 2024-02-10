<script lang="ts">
	import type { PageData } from './$types';
	import ServicesMarker from '../components/ServicesMarker.svelte';
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
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--bg-color);
        box-shadow: 60px 16px color-mix(in srgb, var(--primary-hover) 70%, transparent);
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
    
    .test {
        --test: calc(100vw / 100vh);
        width: var(--test);
    }

    .services > h2 {
        color: white;
        position: fixed;
        top: 50vh;
        left: 35vw;
        text-align: center;
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--bg-color);
        box-shadow: 60px 16px color-mix(in srgb, var(--primary-hover) 70%, transparent);
    }

    @keyframes fade-in {
        /* from {opacity: 0;} */
        20% {opacity: 1;}
        70% {opacity: 1;}
        100% {opacity: 0;}
    }

    .down {
        margin: 0;
        padding: 0;
        transform: rotate(180deg);
        text-align: center;
        font-size: 4rem;
        color: white;
    }



</style>


<section class="intro">
	<h1 class="main-title">Welcome to {data.company.name}</h1>
	<p>{data.company.excerpt}</p>
</section>
<!-- <section class="down">^</section> -->
<section class="services">
    <h2>Some of Our Services</h2>
    {#each data.services as service}
        <ServicesMarker service={service}/>
    {/each}
</section>
<section class="test">test</section>