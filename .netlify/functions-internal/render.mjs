import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/global.css","images/bgimage.jpeg","images/favicon.png"]),
	mimeTypes: {".css":"text/css",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.402cbd5c.js","app":"_app/immutable/entry/app.a6ed613f.js","imports":["_app/immutable/entry/start.402cbd5c.js","_app/immutable/chunks/index.2e112cd8.js","_app/immutable/chunks/singletons.0da5127b.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.a6ed613f.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.2e112cd8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Projects",
				pattern: /^\/Projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Services",
				pattern: /^\/Services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Services/[slug]",
				pattern: /^\/Services\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/ThankYou",
				pattern: /^\/ThankYou\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
