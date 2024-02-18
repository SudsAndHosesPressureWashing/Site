import { error } from '@sveltejs/kit';
import { getService } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let service = getService(params.slug)
    if (service) {
        return service
    }

	error(404, 'Not found');
}