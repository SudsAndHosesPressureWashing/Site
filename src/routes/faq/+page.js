import { error } from '@sveltejs/kit';
import { getFAQs } from '$lib/utils/sanity';

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	let faqs = await getFAQs()
    if (faqs) {
        return {"faqs":faqs}
    }

	error(404, 'Not found');
}