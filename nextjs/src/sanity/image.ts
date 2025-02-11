import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

// Set up the image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
