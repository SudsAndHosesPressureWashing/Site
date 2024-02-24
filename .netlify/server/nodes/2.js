import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.20a873e4.js","_app/immutable/chunks/index.73ab00c7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.ce7d294b.js","_app/immutable/chunks/image.e3cce437.js"];
export const stylesheets = ["_app/immutable/assets/2.a9834240.css"];
export const fonts = [];
