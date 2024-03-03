import * as universal from '../entries/pages/Services/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Services/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Services/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.415ec5cb.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/image.6df57f39.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.2e112cd8.js"];
export const stylesheets = ["_app/immutable/assets/6.1e851f6d.css"];
export const fonts = [];
