<script>
    import { urlFor } from '$lib/utils/image.ts';
    import Hamburger from './Hamburger.svelte';
    import FancyBurgers from './FancyBurgers.svelte';
    export let companyData;

    let active=false;

    function switchOpen() {
        active = !active;
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
    li > a {
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
    li > a:hover,
    li > a:focus,
    li > a:active {
        box-shadow: 0.35rem 0.35rem color-mix(in srgb, var(--primary-hover) 70%, transparent);
    }

    .hamburger {
        display: none;
    }

    @media (max-width: 680px) {
        * {
            margin: 0;
        }
        header {
            flex-direction: column;
        }
        img {
            width: 200px;
            margin-inline: auto;
        }
        .hamburger {
            display: flex;
            justify-content: center;
            margin: 0.5rem;
        }

        .hide-nav {
            display: none;
        }

	}
</style>

<header>
    <div class="nav-container">
        <a href="/"><img src={urlFor(companyData.logo).width(200).url()} alt="Logo"/></a>
        <nav class="{active? 'show-nav':'hide-nav'}" aria-label="Main">
            <ul>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/faq">Frequently Asked Questions</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/getaquote">Get A Free Quote</a></li>
                <!-- <li><a href="/Galery">Gallery</a></li> -->
            </ul>
        </nav>
    </div>
    <div class="hamburger">
        <FancyBurgers bind:active />
    <!-- <div class="{open? 'hamburger-open':'hamburger'}" on:click={()=>(open = !open)} on:keydown={()=>(open = !open)}>{open? 'x':'III'}</div> -->
    </div>
</header>

