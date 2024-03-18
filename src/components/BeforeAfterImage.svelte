<script>
    import { urlFor } from '../lib/utils/image.ts';
    export let project
    let offset=75
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
        width: max-content;
    }
    input[type="range"] {
        -webkit-appearance: none;
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        background: rgba(0,0,0,0);
        height: 500px;
    }

    input[type="range"]::-moz-range-track {
        background: rgba(0,0,0,0);
        height: 500px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: rgba(0,0,0,0);
        border-color: rgba(0,0,0,0);
    }

    input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        background-color: rgba(0,0,0,0);
        border-color: rgba(0,0,0,0);
    }

    input {
        width: 500px;
        transform: translateY(-250px);
        display: block;
        outline-color: var(--primary);

    }

    .beforeafter-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
    }

    .before-text {
        left: 0%;
    }

    .after-text {
        right: 0%;
    }
    .beforeafter-container {
        justify-content: center;
    }

    i {
        padding: 0;
        margin: 0;
        font-size: 0.75rem;
        position: absolute;
        bottom: 2.2rem;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        backdrop-filter: var(--backdrop-filter);
        background-color: var(--bg-color);
    }
</style>


<div class="beforeandafter">
    <img src={urlFor(project.beforeImage).width(500).fit("crop").url()} alt="{project.shortDescription}" class="before"/>
    <img 
        src={urlFor(project.afterImage).width(500).fit("crop").url()} 
        alt="{project.shortDescription}" 
        class="after"
        
        
        style="--offset: {-offset+75}%"
    />
    <span class="beforeafter-text before-text">before</span>
    <span class="beforeafter-text after-text">after</span>
    <input type="range" min="0" max="150" id="slider" bind:value = {offset} />
    <i>Drag the Image Back and Forth to See the The Before and After!</i>
</div>


