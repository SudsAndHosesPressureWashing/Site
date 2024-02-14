<script>
    export let open;
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .hide-nav {
        display: flex;
    }

    .nav-show {
        display: flex;
    }

    @media (max-width: 680px) {
        .hide-nav {
            display: none;
        }

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
        color: var(--primary);
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
        /* background-size: 100% 0.1em; */
        box-shadow: 0.35rem 0.35rem color-mix(in srgb, var(--primary-hover) 70%, transparent);
    }
    nav {
        display: flex;
    }



</style>
{#if open}
<div>
    <nav>
        <ul>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/FAQ">Frequently Asked Questions</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/GetAQuote">Get A Quote</a></li>
        </ul>
    </nav>
</div>
{/if}