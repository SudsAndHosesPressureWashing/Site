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
        --show-description: none;
    }

    .marker:hover {
        --show-description: inline-block;
        max-width: 23rem;
        color: white;
        
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
<a href="{service.serviceSlug}">
    <div class="marker" style="left: {service.left}; top: {service.top};" >
        <h3 >{ service.name }</h3>
        <p>{ service.shortDescription}</p>
    </div>
</a>
