import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export type { SanityImageSource };
