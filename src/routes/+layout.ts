import { getCompany } from '$lib/utils/sanity';
import { getSocials } from '$lib/utils/sanity';
import { getImages } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const company = await getCompany();
	const socials = await getSocials();
	if (company && socials) {
		return {
			'company':company,
			socials
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
