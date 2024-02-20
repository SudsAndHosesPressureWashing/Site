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
        width: 15rem;
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
        font-size: 0.8;
        color: white;
    }
    a:hover > span {
        text-decoration: underline var(--primary-hover);
    }

</style>
<footer>
    Reach Out
    <div class="socials">
    {#each socials as social}
    <a href="{social.url.current}">
        <div class="social__card">
            <img src="{urlFor(social.logo).width(40)}" alt="{social.name}" />
            <span>{social.name}</span>
            
        </div>
    </a>
    
    {/each}
    </div>
</footer>