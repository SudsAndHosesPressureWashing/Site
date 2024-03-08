import { error } from '@sveltejs/kit';
import { getProject } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	let project = getProject(params.slug)
    
    if (project) {
        return {"project":project}
    }

	error(404, 'Not found');
}