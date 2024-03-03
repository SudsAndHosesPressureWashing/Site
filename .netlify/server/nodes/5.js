import * as universal from '../entries/pages/Services/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Services/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Services/+page.js";
export const imports = ["_app/immutable/nodes/5.53f1beb3.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/image.6df57f39.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.2e112cd8.js","_app/immutable/chunks/ServiceCard.a92bf306.js"];
export const stylesheets = ["_app/immutable/assets/4.e2f9b133.css","_app/immutable/assets/ServiceCard.06a36a84.css"];
export const fonts = [];
