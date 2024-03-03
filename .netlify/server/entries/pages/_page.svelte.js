import { c as create_ssr_component, e as escape, f as each, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { S as ServiceCard } from "../../chunks/ServiceCard.js";
import { P as ProjectCard } from "../../chunks/ProjectCard.js";
const ServicesMarker_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-12riz2f{margin:0;padding:0;color:white}.marker.svelte-12riz2f{vertical-align:middle;position:fixed;background-color:var(--bg-color);backdrop-filter:var(--backdrop-filter);height:auto;box-shadow:5px 5px color-mix(in srgb, var(--primary-hover) 70%, transparent);transition:all .2s ease-in-out;--show-description:none}.marker.svelte-12riz2f:hover{--show-description:inline-block;max-width:23rem;color:white}p.svelte-12riz2f{display:var(--show-description)}h3.svelte-12riz2f{vertical-align:center}a.svelte-12riz2f{color:white}a.svelte-12riz2f:hover{color:white}",
  map: null
};
const ServicesMarker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { service } = $$props;
  if ($$props.service === void 0 && $$bindings.service && service !== void 0)
    $$bindings.service(service);
  $$result.css.add(css$1);
  return `<a href="${"Services/" + escape(service.slug.current, true)}" class="svelte-12riz2f"><div class="marker svelte-12riz2f" style="${"left: " + escape(service.left, true) + "; top: " + escape(service.top, true) + ";"}"><h3 class="svelte-12riz2f">${escape(service.name)}</h3>
        <p class="svelte-12riz2f">${escape(service.shortDescription)}</p></div></a>`;
});
const powerwash = "/_app/immutable/assets/powerwash.7e6189f3.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1k8xu8a.svelte-1k8xu8a{margin:0;margin-left:auto;margin-right:auto;padding:2rem}.intro.svelte-1k8xu8a.svelte-1k8xu8a{margin-top:calc(5vw)}.main-title.svelte-1k8xu8a.svelte-1k8xu8a{text-align:center}.services.svelte-1k8xu8a.svelte-1k8xu8a{height:calc(110vh);border-radius:20px;opacity:0;animation:svelte-1k8xu8a-fade-in linear forwards;animation-timeline:view();animation-range-start:contain -180px;animation-range-end:contain 250px}.services.svelte-1k8xu8a>h2.svelte-1k8xu8a{position:fixed;top:50vh;left:35vw;text-align:center;background-color:var(--bg-color);backdrop-filter:var(--backdrop-filter);box-shadow:10px 15px color-mix(in srgb, var(--primary-hover) 70%, transparent)}.markers-container.svelte-1k8xu8a.svelte-1k8xu8a{display:inline-block}.cards-container.svelte-1k8xu8a.svelte-1k8xu8a{display:none}@media(max-width: 680px){.services.svelte-1k8xu8a.svelte-1k8xu8a{margin-block:50px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;gap:1rem;animation:none;opacity:1;height:auto;border-radius:0;background-color:var(--bg-color);backdrop-filter:var(--backdrop-filter);box-shadow:10px 15px color-mix(in srgb, var(--primary-hover) 70%, transparent)}.services.svelte-1k8xu8a>h2.svelte-1k8xu8a{position:inherit;width:100%;background-color:rgba(0,0,0,0);backdrop-filter:none;box-shadow:none}.markers-container.svelte-1k8xu8a.svelte-1k8xu8a{display:none}.cards-container.svelte-1k8xu8a.svelte-1k8xu8a{display:inline-block}}@keyframes svelte-1k8xu8a-fade-in{20%{opacity:1}70%{opacity:1}100%{opacity:0}}.projects.svelte-1k8xu8a.svelte-1k8xu8a{margin-bottom:3rem}.projects.svelte-1k8xu8a>h2.svelte-1k8xu8a{text-align:center;margin-bottom:2rem}.projects-container.svelte-1k8xu8a.svelte-1k8xu8a{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;gap:1rem;justify-content:space-around;width:auto}@keyframes svelte-1k8xu8a-quote{0%{opacity:0;scale:0.5}100%{opacity:1;scale:1}}.quote.svelte-1k8xu8a.svelte-1k8xu8a{text-align:center;opacity:0;animation:svelte-1k8xu8a-quote linear forwards;animation-timeline:view();animation-range-start:contain ;animation-range-end:contain 100px;margin-top:10rem;margin-bottom:5rem;backdrop-filter:var(--backdrop-filter);background-color:var(--bg-color);width:20rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="intro styled-container  svelte-1k8xu8a"><h1 class="main-title svelte-1k8xu8a">Welcome to ${escape(data.company.name)}</h1>
	<p>${escape(data.company.excerpt)}</p></section>
<section class="services svelte-1k8xu8a"><h2 class="svelte-1k8xu8a">Some of Our Services</h2>
    ${each(data.services, (service) => {
    return `${service.includeDesktop ? `<div class="markers-container svelte-1k8xu8a">${validate_component(ServicesMarker, "ServicesMarker").$$render($$result, { service }, {}, {})}
            </div>` : ``}
        ${service.includeMobile ? `<div class="cards-container svelte-1k8xu8a">${validate_component(ServiceCard, "ServiceCard").$$render($$result, { service }, {}, {})}
            </div>` : ``}`;
  })}</section>
<section class="styled-container projects svelte-1k8xu8a"><h2 class="svelte-1k8xu8a">Our Previous Projects</h2>
    <div class="projects-container svelte-1k8xu8a">${each(data.projects, (project) => {
    return `${project.includeHomePage ? `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}` : ``}`;
  })}</div></section>
<a href="/GetAQuote"><section class="quote svelte-1k8xu8a"><img${add_attribute("src", powerwash, 0)} alt="Get A Free Quote">
        <h2>Get A Free Quote</h2></section></a>`;
});
export {
  Page as default
};
