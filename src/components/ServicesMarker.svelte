<script>
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
        --show: none;
    }

    .marker:hover {
        --show: inline-block;
        transform: scale(1.2);
        max-width: 23rem;
        color: white;
        
    }

    p {
        display: var(--show);
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
        <div class="marker" style="left: {service.left}; top: {service.top};" on:mouseover={handleHide} on:keydown={handleHide}>
            <h3 >{ service.name }</h3>
            <p>{ service.shortDescription}</p>
        </div>
    </a>
{/if}