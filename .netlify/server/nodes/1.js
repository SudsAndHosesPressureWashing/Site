

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.49a8dfb6.js","_app/immutable/chunks/index.ce7d294b.js","_app/immutable/chunks/singletons.2fb552fe.js"];
export const stylesheets = [];
export const fonts = [];
