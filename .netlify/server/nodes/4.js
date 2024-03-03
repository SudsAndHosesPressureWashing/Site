import * as universal from '../entries/pages/Projects/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/Projects/+page.js";
export const imports = ["_app/immutable/nodes/4.df41bd7b.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/image.6df57f39.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.2e112cd8.js","_app/immutable/chunks/ProjectCard.bf226c03.js"];
export const stylesheets = ["_app/immutable/assets/4.e2f9b133.css","_app/immutable/assets/ProjectCard.d725c1f9.css"];
export const fonts = [];
