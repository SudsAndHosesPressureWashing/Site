import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index2.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-13hvi8p{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="styled-container"><h1 class="svelte-13hvi8p">Our Projects</h1>
    <div class="card-container">${each(data.projects, (project) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
