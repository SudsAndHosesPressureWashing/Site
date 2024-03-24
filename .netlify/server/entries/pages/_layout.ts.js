import { g as getCompany, a as getSocials, b as getImages } from "../../chunks/sanity.js";
import { e as error } from "../../chunks/index.js";
const load = async () => {
  const company = await getCompany();
  const socials = await getSocials();
  const images = await getImages();
  if (company && socials) {
    return {
      "company": company[0],
      socials
    };
  }
  throw error(404, "Not found");
};
export {
  load
};
