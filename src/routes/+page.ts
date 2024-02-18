import { getCompany, getServices, getProjects } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	// const companies = await getCompany();
	const services = await getServices();
	const projects = await getProjects();
	if (services) {
		return {
			services: services,
			projects: projects
		}
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
