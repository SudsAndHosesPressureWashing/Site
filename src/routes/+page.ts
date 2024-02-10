import { getCompany, getServices } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	// const companies = await getCompany();
	const services = await getServices();
	if (services) {
		return {
			services: services
		}
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
