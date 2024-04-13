# Suds and Hoses Pressure Washing Website
```mermaid
graph TD;
    subgraph netlify[Netlify Hosting]
        site[sudsandhosespressurewashing.com]
        studio[studio.sudsandhosespressurewashing.com]
    end
    subgraph github[SudsAndHoses Github Org]
        studiorepo[studio repository]
        siterepo[site repository]
    end
    studiorepo--On Commit to Main-->studio
    siterepo--On Commit to Main-->site
    studio--User Edits and Updates-->sanity
    sanity--User Content-->site

```