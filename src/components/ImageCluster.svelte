
<script>
    import { urlFor } from "$lib/utils/image";
    export let imagecluster
</script>
<style>
/* .grid {
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:10px;
    grid-auto-flow: dense;
}

.grid > div:nth-child(3n+1) {border: red 10px solid; columns: 1}
.grid > div:nth-child(3n+2) {border: green 10px solid;}
.grid > div:nth-child(3n+3) {border: blue 10px solid;} */
.cluster {
    max-width: 700px;
    margin-inline: auto;
}
.grid {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

.grid > div {
    flex: 1 1 10rem;
}

img {
    width:100%;
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
<div class="cluster">
    <div class="grid">
        {#each imagecluster.images as image}
            <div class="height-1 width-1">
                <img src={urlFor(image).fit("crop").url()} alt="{image.caption}" class="before"/>
            </div>
        {/each}

    </div>

    {#if imagecluster.subtitle}
    <div class="subtitle">
        {imagecluster.subtitle}
    </div>
    {/if}
</div>



