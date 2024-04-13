# Suds and Hoses Pressure Washing Website
## Overview
This repo contains the code for the [Suds and Hoses Pressure Washing website](https://sudsandhosespressurewashing.com/website). This site was designed to allow the business owner to edit the content without developer intervention, and to operate at the smallest cost possible. All code and content
## Quick Architecture Overview
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


    click siterepo "https://github.com/SudsAndHosesPressureWashing/Site" "Click to visit the website's repo"

    click studiorepo "https://github.com/SudsAndHosesPressureWashing/Studio" "Click to visit the studio's repo"

    click sanity "https://www.sanity.io/manage/personal/project/shl5nshb" "Click to visit the sanity cms"
```

### Links
- [Studio](https://studio.sudsandhosespressurewashing.com)
- [Studio Repo](https://github.com/SudsAndHosesPressureWashing/Studio)
- [Sanity](https://www.sanity.io/manage/personal/project/shl5nshb)
- [Site](https://studio.sudsandhosespressurewashing.com)
- [Site Repo](https://github.com/SudsAndHosesPressureWashing/Site)
- [Netlify](https://app.netlify.com/teams/sudsandhoses/overview)

