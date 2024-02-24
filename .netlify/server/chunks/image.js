import imageUrlBuilder from "@sanity/image-url";
import { e as client } from "./sanity.js";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
export {
  urlFor as u
};
