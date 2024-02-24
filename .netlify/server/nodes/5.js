import * as universal from '../entries/pages/services/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/services/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.9882268e.js","_app/immutable/chunks/index.73ab00c7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.ce7d294b.js"];
export const stylesheets = [];
export const fonts = [];
