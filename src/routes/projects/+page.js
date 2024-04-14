import { error } from '@sveltejs/kit';
import { getProjects } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */
export async function load() {
	let projects = await getProjects()
    if (projects) {
        return {'projects':projects}
    }

	error(404, 'Not found');
}
