import { e as error } from "../../../chunks/index.js";
import { c as getServices } from "../../../chunks/sanity.js";
function load() {
  let services = getServices();
  if (services) {
    return { "services": services };
  }
  error(404, "Not found");
}
export {
  load
};
