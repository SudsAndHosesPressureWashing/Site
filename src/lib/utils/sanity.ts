import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { Image, ImageAsset, Slug } from '@sanity/types';
import imageUrlBuilding from '@sanity/image-url'
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getCompany(): Promise<Company> {
	return await client.fetch(
		groq`*[_type == "company"][0]
		{
			...,
			'aboutus': aboutus[]->{
			  ...
			}
		  }`
	);
}

export async function getFAQs(): Promise<FAQ[]> {
	return await client.fetch(
		groq`*[_type == "questionandanswer"]`
	)
}

export async function getSocials(): Promise<Social[]> {
	return await client.fetch(
		groq`*[_type == "social"]`
	)	
}

export async function getServices(): Promise<Service[]> {
	return await client.fetch(
		groq`*[_type == "service"]`
	)
}

export async function getService(slug: String): Promise<Service> {
	return await client.fetch(
		groq`*[_type == "service" && slug.current == $slug][0]
		{
		  ...,
		  'steps': steps[]->{
			...
		  }
		}`,{slug}
	)
}

export async function getProjects(): Promise<Project[]> {
	return await client.fetch(
		groq`*[_type == "project"]{
			name,
			includeHomePage,
			slug,
			'mainBeforeAndAfter': mainBeforeAndAfter->{...}
		}`
	)
}

export async function getProject(slug: String): Promise<Project> {
	return await client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]
		{
			...,
			'sections': section[]->{
				...
			},
			'mainBeforeAndAfter': mainBeforeAndAfter->{
				...
			}

		}`,{slug}
	)
}


export async function getImages(): Promise<ImageAsset[]> {
	return await client.fetch(
		// groq`*[defined(mimeType)]`
		groq`*[_type in ["sanity.imageAsset", "sanity.fileAsset"] && !(originalFilename match ["favicon.png"]) && !(metadata.hasAlpha)]
		{..., "refs": count(*[references(^._id)])}
		[refs > 0]`
	)
}


export interface FAQ {
	_type: 'questionandanswer';
	_createdAt: string;
	question: string;
	answer: Text; 
}

export interface Company {
	_type: 'company';
	_createdAt: string;
	companyName?: string;
	excerpt?: string;
	logo?: ImageAsset;
	favicon?: ImageAsset;
	aboutUs: PortableTextBlock[];
}

export interface Social {
	_type: 'social';
	_createdAt: string;
	name: string;
	url: string;
	logo: ImageAsset;
}

export interface ServiceStep {
	_type: 'serviceStep';
	_createdAt: string;
	name: string;
	image: ImageAsset;
	description: PortableTextBlock[];
}

export interface Service {
	_type: 'service';
	_createdAt: string;
	name: string;
	slug: string;
	includeMobile: boolean;
	includeDesktop: boolean;
	mainImage: ImageAsset;
	shortDescription: PortableTextBlock[];
	longDescription: PortableTextBlock[];
	steps: Array<ServiceStep[]>;
	left: string;
	top: string;
}

export interface TextBlock {
	_type: 'textblock';
	_createdAt: string;
	heading: string;
	body: PortableTextBlock[];
}

export interface ImageCluster {
	_type: 'imagecluster';
	_createdAt: string;
	subtitle: string;
	images: Array<ImageAsset[]>
}

export interface BeforeAndAfterImage {
	_type: 'beforeandafterimage',
	_createdAt: string;
	beforeImage: ImageAsset;
	afterImage: ImageAsset
}

export interface Project {
	_type: 'project';
	_createdAt: string;
	name: string;
	slug: string;
	includeHomePage: boolean;
	mainBeforeAndAfter: BeforeAndAfterImage;
	shortDescription: PortableTextBlock[];
	servicesProvided: Array<Service[]>;
	section: Array<ImageAsset[]|TextBlock[]|ImageCluster[]|BeforeAndAfterImage[]>;
	
}