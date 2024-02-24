import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.name)}</h1>
<div><!-- HTML_TAG_START -->${data.shortDescription}<!-- HTML_TAG_END --></div>`;
});
export {
  Page as default
};
