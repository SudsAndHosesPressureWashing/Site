import { c as getServices } from "../../../chunks/sanity.js";
import { e as error } from "../../../chunks/index.js";
const prerender = true;
const load = async () => {
  const services = await getServices();
  if (services) {
    return {
      services
    };
  }
  throw error(404, "Not found");
};
export {
  load,
  prerender
};
