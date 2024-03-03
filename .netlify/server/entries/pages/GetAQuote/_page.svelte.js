import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index2.js";
import { u as urlFor } from "../../../chunks/image.js";
const CheckableService_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-1di6pix{margin:0;padding:0;color:white}label.svelte-1di6pix{padding:0.5rem}label.svelte-1di6pix{margin:0.5rem;vertical-align:middle;text-align:center;height:auto;border-radius:none;border:dashed white 2px;padding:0.5rem;width:15rem;--show-description:none;position:relative}img.svelte-1di6pix{display:inline-block}input.svelte-1di6pix{--check-size:100px;position:absolute;width:var(--check-size);height:var(--check-size);border-radius:var(--check-size);top:calc(50% - var(--check-size) / 2);left:calc(50% - var(--check-size) / 2);background-color:var(--transparent-red);border:var(--primary-hover);opacity:0;font-size:4rem}input.svelte-1di6pix:checked{animation:svelte-1di6pix-check-in 0.2s linear;opacity:1}@keyframes svelte-1di6pix-check-in{80%{opacity:1;transform:scale(1.5)}90%{opacity:1;transform:scale(1)}}",
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
  return `<label${add_attribute("for", service.slug.latest, 0)} class="svelte-1di6pix"><h3 class="svelte-1di6pix">${escape(service.name)}</h3>
    
        <img${add_attribute("src", urlFor(service.mainImage).width(300).height(300).fit("crop").url(), 0)}${add_attribute("alt", service.name, 0)} class="svelte-1di6pix">
        <input type="checkbox"${add_attribute("id", service.name, 0)}${add_attribute("alt", service.name, 0)}${add_attribute("name", service.name, 0)} class="svelte-1di6pix">
    </label>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.services-container.svelte-idtuyx{display:flex;flex-wrap:wrap;justify-content:space-between;justify-content:center}h2.svelte-idtuyx{text-align:center}label.svelte-idtuyx{color:white;text-align:center}fieldset.svelte-idtuyx{max-width:40rem;margin-inline:auto}input.svelte-idtuyx,textarea.svelte-idtuyx{text-align:center;background-color:rgba(0,0,0,0);border:1px solid white}input[type="submit"].svelte-idtuyx{background-color:var(--transparent-red);border:white 1px dashed}input[type="submit"].svelte-idtuyx:hover{background-color:var(--transparent-red);border:white 1px solid;text-decoration:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<form class="styled-container" method="post" name="quote" data-netlify="true" action="https://formsubmit.co/c41680c9166ee9328c4cdbf17b88ad0d"><input type="hidden" name="_next" value="https://main--sudsandhosestestsite.netlify.app/ThankYou" class="svelte-idtuyx">
    <input type="hidden" name="_subject" value="New Quote Request" class="svelte-idtuyx">
    <input type="text" name="_honey" style="display:none" class="svelte-idtuyx">
    <h2 class="svelte-idtuyx">Click On The Services You&#39;d Like Quoted</h2>
    <fieldset class="services-container svelte-idtuyx">${each(data.services, (service) => {
    return `${validate_component(CheckableService, "CheckableService").$$render($$result, { service }, {}, {})}`;
  })}</fieldset>
    
    <fieldset class="svelte-idtuyx"><label for="name" class="svelte-idtuyx">Name</label><input type="name" name="name" id="name" class="svelte-idtuyx">
        <label for="email" class="svelte-idtuyx">Email</label><input type="email" name="email" id="email" class="svelte-idtuyx">
        <label for="phone" class="svelte-idtuyx">Phone</label><input type="phone" name="phone" id="phone" class="svelte-idtuyx">
        <label for="other" class="svelte-idtuyx">Any Other Information We Should Know?</label><textarea name="other" id="other" class="svelte-idtuyx"></textarea>
        <input type="submit" value="Submit" class="svelte-idtuyx"></fieldset></form>`;
});
export {
  Page as default
};
