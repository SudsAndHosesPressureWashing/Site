<script>
    import { urlFor } from "$lib/utils/image"
    export let step
</script>
<style>
    section {
        position: relative;
    }

    h3 {
        position: absolute;
        width: 200px;
        top: 50%;
        transform: translate(0,-50%);
        left: 0;
        text-align: center;
    }
    img {
        opacity: 0.3;
    }

    section {
        --p: none;
    }

    section:hover {
        --header: none;
        --p: flex;
    }

    section > h3 {
        display: var(--header);
    }



    section > p {
        display: var(--p);
        position: absolute;
        text-align: center;
        top:50%;
        margin-block: auto;
        left: 0;
        transform: translate(0,-50%);
        display: var(block);
        color: white;
    }
</style>
<section>
    <img src="{urlFor(step.image).width(200).height(200).fit("crop").url()}" alt="{step.name}" />
    <h3>{step.name}</h3>
    <p>{step.description}</p>
</section>