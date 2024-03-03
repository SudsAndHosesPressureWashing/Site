import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.d39f990c.js","_app/immutable/chunks/image.6df57f39.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.2e112cd8.js"];
export const stylesheets = ["_app/immutable/assets/0.79b6d56e.css"];
export const fonts = [];
