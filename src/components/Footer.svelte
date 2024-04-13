<script>
    import { urlFor } from "$lib/utils/image"
    export let socials
</script>

<style>
    footer {
        text-align: center;
        margin: 0;
        margin-inline: auto;
        padding: 0;
        background-color: var(--bg-color);
        backdrop-filter: var(--backdrop-filter);
        width: 20rem;
        margin-bottom: 0vh;
        /* border-radius: 10px 10px 0 0; */
    }
    .socials {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
        width: auto;
    }
    .social__card {
        margin: 0.5rem;
    }
    div {
        margin-inline: auto;
        text-align: center;
    }
    img {
        display: block;
        margin-inline: auto;
        
    }
    span {
        font-size: 0.8rem;
        color: white;
    }

    i {
        font-size: 0.6rem;
        margin: 0;
    }

</style>

<footer aria-label="Footer">
    Reach Out
    <div class="socials">
    {#each socials as social}
        <a href="{social.url.current}">
            <div class="social__card">
                <img src="{urlFor(social.logo).width(40)}" alt="{social.name} Logo" />
                <span>{social.name}</span>
                
            </div>
        </a>
    {/each}
    </div>
    <i>© 2024 Suds And Hoses Power Washing, LLC, Rights Reserved</i>
</footer>