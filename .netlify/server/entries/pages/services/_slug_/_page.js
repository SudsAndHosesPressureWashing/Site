import { e as error } from "../../../../chunks/index.js";
import { f as getService } from "../../../../chunks/sanity.js";
function load({ params }) {
  console.log("slug");
  console.log(params.slug);
  let service = getService(params.slug);
  if (service) {
    return service;
  }
  error(404, "Not found");
}
export {
  load
};
