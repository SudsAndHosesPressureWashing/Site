<script>
    import { urlFor } from '../lib/utils/image.ts';
    export let project
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
        --show-description: inline-block;
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

    a:hover {
        --show-description: inline-block;
        text-decoration: underline var(--primary-hover);
    }

    a:hover > section {
        animation: 0.2 linear; 
        border: solid var(--primary-hover) 2px;
        color: var(--primary-hover)
    }

    .before {
        top: 0;
        position: absolute;
    }

    .after {
        top: 0;
        position: relative;
        clip-path: polygon(70% 0%, 30% 100%, 100% 100%, 100% 0%);
    }

    .beforeandafter {
        position: relative;
    }

</style>
<a href="projects/{project.slug.current}">
    <section>
        <h3 >{ project.name }</h3>
        <div class="beforeandafter">
            <img src={urlFor(project.beforeImage).width(200).fit("crop").url()} alt="{project.shortDescription}" class="before"/>
            <img src={urlFor(project.afterImage).width(200).fit("crop").url()} alt="{project.shortDescription}" class="after"/>
        </div>
        <p>{ project.shortDescription}</p>
    </section>
</a>
