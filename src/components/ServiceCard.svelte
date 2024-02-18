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

    
    section {
        vertical-align: middle;
        text-align: center;
        height:auto;
        border-radius: none;
        border: dashed white 2px;
        padding: 1rem;
        width: 15rem;
        /* box-shadow: 2px 2px color-mix(in srgb, var(--primary-hover) 70%, transparent); */
        /* transition: all .2s ease-in-out; */
        --show-description: none;
    }

    p {
        display: var(--show-description);
    }

    img {
        display: inline-block;
        width: 200px;
        height: 200px;
    }
    a:hover {
        /* transform: scale(1.1); */
        --show-description: inline-block;
        /* color: white; */
        text-decoration: underline var(--primary-hover);
    }

    a:hover > section {
        animation: 0.2 linear; 
        border: solid var(--primary-hover) 2px;
        color: var(--primary-hover)
    }

    h3 {
        vertical-align: center;
        
    }

    a {
        color: white;
        text-decoration: none;
    }


</style>
<a href="services/{service.slug.current}">
    <section>
        <h3 >{ service.name }</h3>
        <img src={urlFor(service.mainImage).width(200).fit("crop").url()} alt="{service.shortDescription}"/>
        <p>{ service.shortDescription}</p>
    </section>
</a>
