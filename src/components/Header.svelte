<script>
    import Navigation from "./Navigation.svelte";
	import { urlFor } from '$lib/utils/image.ts';
    export let companyData;
</script>
<style>

    * {
        margin: 0;
    }

    .open {
        rotate: 90deg;
        text-align: center;
        width: 100%;
        height: auto;
        display: none;
        font-size: 2rem;
    }

    @media (max-width: 640px) {
        header {
            flex-direction: column;
            --show-nav: none;
        }
        img {
            width: 200px;
            margin-inline: auto;
        }
        .open {
            display: inline-block;
        }

	}

	

    .nav-container {
        
        display: flex;
        justify-content: space-evenly;
        /* flex-wrap: wrap; */
        top: 0;
        width: 100%;
        margin-inline: auto;
    }

    header {
        position: sticky;
        top: 0;
        left: 0;
        background-color: var(--bg-color);
        backdrop-filter: var(--backdrop-filter);
        z-index: 1000;
    }

    img {
        margin-block: auto;
    }

</style>
<header>
    <div class="nav-container">
        <img src={urlFor(companyData.logo).width(200).url()} alt="Logo"/>
        <Navigation />
    </div>

    <div class="open">III</div>
</header>

