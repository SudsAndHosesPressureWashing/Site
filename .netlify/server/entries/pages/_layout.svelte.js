import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty, f as each, v as validate_component } from "../../chunks/index2.js";
import { u as urlFor } from "../../chunks/image.js";
const animation = "";
const main = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-gacn24.svelte-gacn24{margin:0;padding:0}header.svelte-gacn24.svelte-gacn24{position:sticky;top:0;left:0;background-color:var(--bg-color);backdrop-filter:var(--backdrop-filter);z-index:1000}img.svelte-gacn24.svelte-gacn24{margin-block:auto}.nav-container.svelte-gacn24.svelte-gacn24{display:flex;justify-content:space-evenly;flex-wrap:wrap;top:0;width:100%;margin-inline:auto}.hide-nav.svelte-gacn24.svelte-gacn24{display:flex}.show-nav.svelte-gacn24.svelte-gacn24{display:flex}ul.svelte-gacn24.svelte-gacn24{display:flex;height:auto;width:auto;flex-wrap:wrap;justify-content:space-evenly;gap:1.2rem;padding:2rem}li.svelte-gacn24>a.svelte-gacn24{text-decoration:none;color:white;background-size:0% 0.1em;background-position-y:100%;background-position-x:0%;background-repeat:no-repeat;transition:box-shadow 0.2s ease-in-out;text-align:center;box-shadow:0.15rem 0.15rem color-mix(in srgb, var(--primary-hover) 70%, transparent);padding-right:0.1rem}li.svelte-gacn24>a.svelte-gacn24:hover,li.svelte-gacn24>a.svelte-gacn24:focus,li.svelte-gacn24>a.svelte-gacn24:active{box-shadow:0.35rem 0.35rem color-mix(in srgb, var(--primary-hover) 70%, transparent)}.hamburger.svelte-gacn24.svelte-gacn24{rotate:90deg;text-align:center;width:100%;height:auto;display:none;font-size:2rem;color:white}.hamburger.svelte-gacn24.svelte-gacn24:hover{color:var(--primary-hover)\n    }.hamburger-open.svelte-gacn24.svelte-gacn24{rotate:0deg;text-align:center;width:100%;height:auto;font-size:2rem;color:white}.hamburger-open.svelte-gacn24.svelte-gacn24:hover{color:var(--primary-hover)\n    }@media(max-width: 680px){header.svelte-gacn24.svelte-gacn24{flex-direction:column}img.svelte-gacn24.svelte-gacn24{width:200px;margin-inline:auto}.hamburger.svelte-gacn24.svelte-gacn24{display:inline-block}.hide-nav.svelte-gacn24.svelte-gacn24{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { companyData } = $$props;
  if ($$props.companyData === void 0 && $$bindings.companyData && companyData !== void 0)
    $$bindings.companyData(companyData);
  $$result.css.add(css$1);
  return `<header class="svelte-gacn24"><div class="nav-container svelte-gacn24"><a href="/" class="svelte-gacn24"><img${add_attribute("src", urlFor(companyData.logo).width(200).url(), 0)} alt="Logo" class="svelte-gacn24"></a>
        <nav class="${escape(null_to_empty("hide-nav"), true) + " svelte-gacn24"}"><ul class="svelte-gacn24">
                
                
                
                <li class="svelte-gacn24"><a href="/GetAQuote" class="svelte-gacn24">Get A Free Quote</a></li>
                </ul></nav></div>

    <div class="${escape(null_to_empty("hamburger"), true) + " svelte-gacn24"}">${escape("III")}</div></header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-5cr5du{text-align:center;margin:0;margin-inline:auto;padding:0;background-color:var(--bg-color);backdrop-filter:var(--backdrop-filter);width:15rem;margin-bottom:0vh}.socials.svelte-5cr5du{display:flex;flex-wrap:wrap;justify-content:center;align-content:space-around;width:auto}.social__card.svelte-5cr5du{margin:0.5rem}div.svelte-5cr5du{margin-inline:auto;text-align:center}img.svelte-5cr5du{display:block;margin-inline:auto}span.svelte-5cr5du{font-size:0.8;color:white}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socials } = $$props;
  if ($$props.socials === void 0 && $$bindings.socials && socials !== void 0)
    $$bindings.socials(socials);
  $$result.css.add(css);
  return `<footer class="svelte-5cr5du">Reach Out
    <div class="socials svelte-5cr5du">${each(socials, (social) => {
    return `<a${add_attribute("href", social.url.current, 0)}><div class="social__card svelte-5cr5du"><img${add_attribute("src", urlFor(social.logo).width(40), 0)}${add_attribute("alt", social.name, 0)} class="svelte-5cr5du">
            <span class="svelte-5cr5du">${escape(social.name)}</span></div>
    </a>`;
  })}</div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-bzt2ll_START -->${$$result.title = `<title>Welcome to Suds and Hoses Pressure Washing!</title>`, ""}<!-- HEAD_svelte-bzt2ll_END -->`, ""}




<body>${validate_component(Header, "Header").$$render($$result, { companyData: data.company }, {}, {})}
	<main>${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, { socials: data.socials }, {}, {})}</body>`;
});
export {
  Layout as default
};
