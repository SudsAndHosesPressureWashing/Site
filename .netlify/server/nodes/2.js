import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.7ab7dab2.js","_app/immutable/chunks/image.6df57f39.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.2e112cd8.js","_app/immutable/chunks/ServiceCard.a92bf306.js","_app/immutable/chunks/ProjectCard.bf226c03.js"];
export const stylesheets = ["_app/immutable/assets/2.448d71e1.css","_app/immutable/assets/ServiceCard.06a36a84.css","_app/immutable/assets/ProjectCard.d725c1f9.css"];
export const fonts = [];
