import { error } from '@sveltejs/kit';
import { getProjects } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */
export function load() {
	let projects = getProjects()
    if (projects) {
        return {'projects':projects}
    }

	error(404, 'Not found');
}