<script>
    import { urlFor } from '../lib/utils/image.ts';
    let value = "0"
    export let project

</script>
<style>
    .before {
        top: 0;
        position: absolute;
    }

    .after {
        top: 0;
        position: relative;
        --offset: 0%;
        clip-path: polygon(calc( 70% - var(--offset) ) 0%, calc( 30% - var(--offset) ) 100%, 100% 100%, 100% 0%);
    }

    .after:not(:hover) {
        --offset: 0%;
    }
    .beforeandafter {
        position: relative;
        margin-inline: auto;
    }

</style>

<div class="beforeandafter">
    <img src={urlFor(project.beforeImage).width(500).fit("crop").url()} alt="{project.shortDescription}" class="before"/>
    <img 
        src={urlFor(project.afterImage).width(500).fit("crop").url()} 
        alt="{project.shortDescription}" 
        class="after"
        
        
        style="--offset: {offset}%"
    />
</div>
<input type="range" min="0" max="150" value="75" id="slider" bind:value>

<!-- {e => offset = -(e.clientX-e.currentTarget.getBoundingClientRect().x)/1}" -->

