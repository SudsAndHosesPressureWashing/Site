<script>
    import { urlFor } from '../lib/utils/image.ts';
    export let service;
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        color: white;
    }

    label {
        padding: 0.5rem;
    }
    
    label {
        margin: 0.5rem;
        vertical-align: middle;
        text-align: center;
        height:auto;
        border-radius: none;
        border: dashed white 2px;
        padding: 0.5rem;
        width: 15rem;
        --show-description: none;
        position: relative;
    }

    img {
        display: inline-block;
        /* width: 200px;
        height: 200px; */
    }

    input {
        --check-size: 100px;
        position:absolute;
        width: var(--check-size);
        height: var(--check-size);
        border-radius: var(--check-size);
        /* margin-top:-310px; */
        top: calc(50% - var(--check-size) / 2);
        left: calc(50% - var(--check-size) / 2);
        background-color: var(--transparent-red);
        border: var(--primary-hover);
        opacity: 0;
        font-size: 4rem;
        
    }
    input:checked {
        animation: check-in 0.2s linear;
        opacity: 1;
    }

    @keyframes check-in {
        80% {opacity: 1; transform: scale(1.5);}
        90% {opacity: 1; transform: scale(1);}
    }

    input[type="checkbox"]:checked + label > img{
        opacity: 0.8;
    }

    .image-container {
        position: relative;
    }

</style>

<label for="{service.slug.latest}">
    <h3>{service.name}</h3>
    <!-- <div class="image-container"> -->
        <img src="{urlFor(service.mainImage).width(300).height(300).fit("crop").url()}" alt="{service.name}"/>
        <input type="checkbox" id="{service.name}" alt="{service.name}" name="{service.name}" />
    <!-- </div> -->
</label>


