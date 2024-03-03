import { c as create_ssr_component, e as escape, b as add_attribute } from "./index2.js";
import { u as urlFor } from "./image.js";
const ServiceCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1hznx2a.svelte-1hznx2a{margin:0;padding:0;color:white}section.svelte-1hznx2a.svelte-1hznx2a{vertical-align:middle;text-align:center;height:auto;border-radius:none;border:dashed white 2px;padding:1rem;width:15rem;--show-description:none}p.svelte-1hznx2a.svelte-1hznx2a{display:var(--show-description)}img.svelte-1hznx2a.svelte-1hznx2a{display:inline-block;width:200px;height:200px}a.svelte-1hznx2a.svelte-1hznx2a:hover{--show-description:inline-block;text-decoration:underline var(--primary-hover)}a.svelte-1hznx2a:hover>section.svelte-1hznx2a{animation:0.2 linear;border:solid var(--primary-hover) 2px;color:var(--primary-hover)\n    }h3.svelte-1hznx2a.svelte-1hznx2a{vertical-align:center}a.svelte-1hznx2a.svelte-1hznx2a{color:white;text-decoration:none}",
  map: null
};
const ServiceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { service } = $$props;
  if ($$props.service === void 0 && $$bindings.service && service !== void 0)
    $$bindings.service(service);
  $$result.css.add(css);
  return `<a href="${"Services/" + escape(service.slug.current, true)}" class="svelte-1hznx2a"><section class="svelte-1hznx2a"><h3 class="svelte-1hznx2a">${escape(service.name)}</h3>
        <img${add_attribute("src", urlFor(service.mainImage).width(200).fit("crop").url(), 0)}${add_attribute("alt", service.shortDescription, 0)} class="svelte-1hznx2a">
        <p class="svelte-1hznx2a">${escape(service.shortDescription)}</p></section></a>`;
});
export {
  ServiceCard as S
};
