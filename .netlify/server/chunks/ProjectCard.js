import { c as create_ssr_component, e as escape, b as add_attribute } from "./index2.js";
import { u as urlFor } from "./image.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-13167nw.svelte-13167nw{margin:0;padding:0;color:white}section.svelte-13167nw.svelte-13167nw{vertical-align:middle;text-align:center;height:auto;border-radius:none;border:dashed white 2px;padding:1rem;width:15rem;--show-description:none}p.svelte-13167nw.svelte-13167nw{display:var(--show-description)}img.svelte-13167nw.svelte-13167nw{display:inline-block;width:200px;height:200px}a.svelte-13167nw.svelte-13167nw:hover{--show-description:inline-block;text-decoration:underline var(--primary-hover)}a.svelte-13167nw:hover>section.svelte-13167nw{animation:0.2 linear;border:solid var(--primary-hover) 2px;color:var(--primary-hover)\n    }h3.svelte-13167nw.svelte-13167nw{vertical-align:center}a.svelte-13167nw.svelte-13167nw{color:white;text-decoration:none}a.svelte-13167nw.svelte-13167nw:hover{--show-description:inline-block;text-decoration:underline var(--primary-hover)}a.svelte-13167nw:hover>section.svelte-13167nw{animation:0.2 linear;border:solid var(--primary-hover) 2px;color:var(--primary-hover)\n    }.before.svelte-13167nw.svelte-13167nw{top:0;position:absolute}.after.svelte-13167nw.svelte-13167nw{top:0;position:relative;clip-path:polygon(70% 0%, 30% 100%, 100% 100%, 100% 0%)}.beforeandafter.svelte-13167nw.svelte-13167nw{position:relative}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `<a href="${"Projects/" + escape(project.slug.current, true)}" class="svelte-13167nw"><section class="svelte-13167nw"><h3 class="svelte-13167nw">${escape(project.name)}</h3>
        <div class="beforeandafter svelte-13167nw"><img${add_attribute("src", urlFor(project.beforeImage).width(200).fit("crop").url(), 0)}${add_attribute("alt", project.shortDescription, 0)} class="before svelte-13167nw">
            <img${add_attribute("src", urlFor(project.afterImage).width(200).fit("crop").url(), 0)}${add_attribute("alt", project.shortDescription, 0)} class="after svelte-13167nw"></div>
        <p class="svelte-13167nw">${escape(project.shortDescription)}</p></section></a>`;
});
export {
  ProjectCard as P
};
