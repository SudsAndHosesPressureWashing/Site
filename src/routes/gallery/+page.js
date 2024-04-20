import { error } from '@sveltejs/kit';
import { getImages } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */
export async function load() {
	let images = await getImages()
    if (images) {
        return {"images":images}
    }

	error(404, 'Not found');
}