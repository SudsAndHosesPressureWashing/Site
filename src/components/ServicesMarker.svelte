<script>
    import { urlFor } from '../lib/utils/image.ts';
    export let service
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    
    .marker {
        vertical-align: middle;
        position: fixed;
        background-color: var(--bg-color);
        backdrop-filter: var(--backdrop-filter);
        height:auto;
        box-shadow: 5px 5px color-mix(in srgb, var(--primary-hover) 70%, transparent);
        transition: all .2s ease-in-out;
        --show-description: none;
    }

    .marker > img {
        display: none;
    }


    .marker:hover {
        --show-description: inline-block;
        max-width: 23rem;
        color: white;
        
    }

    @media (max-width: 680px) {
        .marker {
            position: inherit;
            text-align: center;
            --show-description: none;
            margin: 1rem;
            margin-inline: auto;
            max-width: 15rem;
            aspect-ratio: 1/1;
            animation: linear;
            padding: 1.5rem;
        }
        .marker > img {
            display: inline-block;
            width: 150px;
            height: 150px;
        }
        .marker:hover {
            /* transform: scale(1.1); */
            --show-description: none;
        }
        .marker>h2 {
            margin: 1rem;
        }

	}

    p {
        display: var(--show-description);
    }

    h3 {
        vertical-align: center;
        
    }

    a {
        color: white;
    }

    a:hover {
        color: white;
    }

</style>
{#if service.top!=="undefined"}
    <a href="{service.serviceSlug}">
        <div class="marker" style="left: {service.left}; top: {service.top};" >
            <h3 >{ service.name }</h3>
            <p>{ service.shortDescription}</p>
            <img src={urlFor(service.mainImage).width(200).fit("crop").url()} alt="{service.shortDescription}"/>
        </div>
    </a>
{/if}