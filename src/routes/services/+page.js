import { error } from '@sveltejs/kit';
import { getServices } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */

export async function load() {
	let services = await getServices()
    if (services) {
        return {'services':services}
    }

	error(404, 'Not found');
}
