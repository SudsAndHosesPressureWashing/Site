

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.cfad5a44.js","_app/immutable/chunks/index.ce7d294b.js"];
export const stylesheets = [];
export const fonts = [];
