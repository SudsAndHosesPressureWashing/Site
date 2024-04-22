<script>
    import { urlFor } from '$lib/utils/image.ts';
    export let data;
</script>

<style>
    .grid {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
    
    img {
        width:250px;
        height:auto;
        object-fit: cover;
        overflow:hidden;
        transition:.2s ease-in-out;
        /* z-index: -1; */
    }
    
    img:hover {
        position: relative;
        transform: scale(1.2);
        z-index: 9999;
    }
    
    </style>

<svelte:head>
    <title>Our Gallerly of Images</title>
    <meta name="description" content="All of our images in one place" />
</svelte:head>
<section class="styled-container grid">
    {#each data.images as image}
        <img src="{urlFor(image).width(250)}" alt="Our Gallery">
    {/each}
</section>