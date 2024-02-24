import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index2.js";
import { u as urlFor } from "../../../chunks/image.js";
const CheckableService_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-1uj2iqg{margin:0;padding:0;color:white}label.svelte-1uj2iqg{padding:0.5rem}section.svelte-1uj2iqg{margin:0.5rem;vertical-align:middle;text-align:center;height:auto;border-radius:none;border:dashed white 2px;padding:0.5rem;width:15rem;--show-description:none}img.svelte-1uj2iqg{display:inline-block}input.svelte-1uj2iqg{--check-size:100px;position:absolute;width:var(--check-size);height:var(--check-size);border-radius:var(--check-size);top:calc(50% - var(--check-size) / 2);left:calc(50% - var(--check-size) / 2);background-color:var(--transparent-red);border:var(--primary-hover);opacity:0;font-size:4rem}input.svelte-1uj2iqg:checked{animation:svelte-1uj2iqg-check-in 0.2s linear;opacity:1}@keyframes svelte-1uj2iqg-check-in{80%{opacity:1;transform:scale(1.5)}90%{opacity:1;transform:scale(1)}}.image-container.svelte-1uj2iqg{position:relative}",
  map: null
};
const CheckableService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { service } = $$props;
  let { checked = "" } = $$props;
  if ($$props.service === void 0 && $$bindings.service && service !== void 0)
    $$bindings.service(service);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$1);
  return `<section class="svelte-1uj2iqg"><label${add_attribute("for", service.slug.latest, 0)} class="svelte-1uj2iqg"><h3 class="svelte-1uj2iqg">${escape(service.name)}</h3>
    <div class="image-container svelte-1uj2iqg"><img${add_attribute("src", urlFor(service.mainImage).width(300).height(300).fit("crop").url(), 0)}${add_attribute("alt", service.name, 0)} class="svelte-1uj2iqg">
        <input type="checkbox"${add_attribute("id", service.slug.latest, 0)}${add_attribute("name", service.slug.latest, 0)}${add_attribute("alt", service.name, 0)} class="svelte-1uj2iqg"></div></label></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.services-container.svelte-ca6fez{display:flex;flex-wrap:wrap;justify-content:space-between;justify-content:center}h2.svelte-ca6fez{text-align:center}label.svelte-ca6fez{color:white;text-align:center}fieldset.svelte-ca6fez{max-width:40rem;margin-inline:auto}input.svelte-ca6fez{text-align:center}input[type="submit"].svelte-ca6fez{background-color:var(--transparent-red);border:white 1px dashed}input[type="submit"].svelte-ca6fez:hover{background-color:var(--transparent-red);border:white 1px solid;text-decoration:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<form class="styled-container" action="/sendquote" method="post" name="quote" netlify><h2 class="svelte-ca6fez">Click On The Services You&#39;d Like Quoted</h2>
    <div class="services-container svelte-ca6fez">${each(data.services, (service) => {
    return `${validate_component(CheckableService, "CheckableService").$$render($$result, { service }, {}, {})}`;
  })}</div>
    
    <fieldset class="svelte-ca6fez"><label for="name" class="svelte-ca6fez">Name</label><input type="name" name="name" id="name" class="svelte-ca6fez">
        <label for="email" class="svelte-ca6fez">Email</label><input type="email" name="email" id="email" class="svelte-ca6fez">
        <label for="phone" class="svelte-ca6fez">Phone</label><input type="phone" name="phone" id="phone" class="svelte-ca6fez">
        <label for="other" class="svelte-ca6fez">Any Other Information We Should Know?</label><textarea name="other" id="other"></textarea>
        <input type="submit" value="Submit" class="svelte-ca6fez"></fieldset></form>`;
});
export {
  Page as default
};
