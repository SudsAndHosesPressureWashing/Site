

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9c66929d.js","_app/immutable/chunks/index.2e112cd8.js","_app/immutable/chunks/singletons.0da5127b.js"];
export const stylesheets = [];
export const fonts = [];
