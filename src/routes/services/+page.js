import { error } from '@sveltejs/kit';
import { getServices } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */

export function load() {
	let services = getServices()
    if (services) {
        return {'services':services}
    }

	error(404, 'Not found');
}