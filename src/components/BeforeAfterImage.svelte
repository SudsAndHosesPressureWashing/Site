<script>
    import { urlFor } from '../lib/utils/image.ts';
    let offset = 0
    export let project
    console.log(offset)

    function handleMouse(e) {
        offset = (((e.clientX-e.currentTarget.getBoundingClientRect().x)/500)*100-50)*-1
        console.log(offset)
    }
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

<div class="beforeandafter" on:mousemove={handleMouse} on:mouseleave={e=>offset=0}>
    <img src={urlFor(project.beforeImage).width(500).fit("crop").url()} alt="{project.shortDescription}" class="before"/>
    <img 
        src={urlFor(project.afterImage).width(500).fit("crop").url()} 
        alt="{project.shortDescription}" 
        class="after"
        
        
        style="--offset: {offset}%"
    />
</div>

<!-- {e => offset = -(e.clientX-e.currentTarget.getBoundingClientRect().x)/1}" -->

