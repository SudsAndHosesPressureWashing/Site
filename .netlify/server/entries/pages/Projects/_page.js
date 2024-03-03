import { e as error } from "../../../chunks/index.js";
import { d as getProjects } from "../../../chunks/sanity.js";
function load() {
  let projects = getProjects();
  if (projects) {
    return { "projects": projects };
  }
  error(404, "Not found");
}
export {
  load
};
