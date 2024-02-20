<script>
	import { urlFor } from '$lib/utils/image.ts';
    export let companyData;
    let open=false;

    function switchOpen() {
        open = !open;
    }
</script>
<style>

    * {
        margin: 0;
        padding: 0;
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

    .nav-container {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        top: 0;
        width: 100%;
        margin-inline: auto;
    }

    .hide-nav {
        display: flex;
    }

    .show-nav {
        display: flex;
    }

    ul {
        display: flex;
        height: auto;
        width: auto;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 1.2rem;
        padding: 2rem;
    }
    a {
        text-decoration: none;
        color: white;
        /* background-image: linear-gradient(var(--primary-hover), var(--primary-hover)); */
        background-size: 0% 0.1em;
        background-position-y: 100%;
        background-position-x: 0%;
        background-repeat: no-repeat;
        transition: box-shadow 0.2s ease-in-out;
        text-align: center;
        box-shadow: 0.15rem 0.15rem color-mix(in srgb, var(--primary-hover) 70%, transparent);
        padding-right: 0.1rem;

    }
    a:hover,
    a:focus,
    a:active {
        box-shadow: 0.35rem 0.35rem color-mix(in srgb, var(--primary-hover) 70%, transparent);
    }

    .hamburger {
        rotate: 90deg;
        text-align: center;
        width: 100%;
        height: auto;
        display: none;
        font-size: 2rem;
        color: white;
    }

    .hamburger:hover {
        color: var(--primary-hover)
    }

    .hamburger-open {
        rotate: 0deg;
        text-align: center;
        width: 100%;
        height: auto;
        font-size: 2rem;
        color: white;
    }

    .hamburger-open:hover {
        color: var(--primary-hover)
    }

    @media (max-width: 680px) {
        header {
            flex-direction: column;
        }
        img {
            width: 200px;
            margin-inline: auto;
        }
        .hamburger {
            display: inline-block;
        }

        .hide-nav {
            display: none;
        }

	}
</style>
<header>
    <div class="nav-container">
        <img src={urlFor(companyData.logo).width(200).url()} alt="Logo"/>
        <nav class="{open? 'show-nav':'hide-nav'}">
            <ul>
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="/FAQ">Frequently Asked Questions</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/GetAQuote">Get A Quote</a></li>
                <li><a href="/Galery">Gallery</a></li>
            </ul>
        </nav>
    </div>

    <div class="{open? 'hamburger-open':'hamburger'}" on:click={()=>(open = !open)} on:keydown={()=>(open = !open)}>{open? 'x':'III'}</div>
</header>

