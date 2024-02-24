import { c as getServices, d as getProjects } from "../../chunks/sanity.js";
import { e as error } from "../../chunks/index.js";
const load = async () => {
  const services = await getServices();
  const projects = await getProjects();
  if (services) {
    return {
      services,
      projects
    };
  }
  throw error(404, "Not found");
};
export {
  load
};
