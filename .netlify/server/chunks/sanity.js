import { createClient } from "@sanity/client";
import groq from "groq";
const PUBLIC_SANITY_PROJECT_ID = "shl5nshb";
const PUBLIC_SANITY_DATASET = "production";
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
  // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20"
  // date of setup
});
async function getCompany() {
  return await client.fetch(
    groq`*[_type == "company"]`
  );
}
async function getSocials() {
  return await client.fetch(
    groq`*[_type == "social"]`
  );
}
async function getServices() {
  return await client.fetch(
    groq`*[_type == "service"]`
  );
}
async function getService(slug) {
  return await client.fetch(
    groq`*[_type == "service" && slug.current == $slug][0]`,
    { slug }
  );
}
async function getProjects() {
  return await client.fetch(
    groq`*[_type == "project"]`
  );
}
async function getImages() {
  return await client.fetch(
    groq`*[_type == "image"]`
  );
}
export {
  getSocials as a,
  getImages as b,
  getServices as c,
  getProjects as d,
  client as e,
  getService as f,
  getCompany as g
};
