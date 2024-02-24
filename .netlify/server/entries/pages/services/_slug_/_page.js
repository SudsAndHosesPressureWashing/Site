import { e as error } from "../../../../chunks/index.js";
import { f as getService } from "../../../../chunks/sanity.js";
function load({ params }) {
  let service = getService(params.slug);
  if (service) {
    return service;
  }
  error(404, "Not found");
}
export {
  load
};
