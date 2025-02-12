import { client } from "@/sanity/client";
import Image from "next/image";
import SocialLink from "@/components/social-link";
import { PortableText } from "@portabletext/react";

const SETTINGS_QUERY = `*[_type == "settings"][0]`;

const renderSocialLink = (type, url) => (
  <SocialLink type={type} url={url} color="black" />
);

export default async function AboutPage() {
  const settings = await client.fetch(SETTINGS_QUERY);

  return (
    <div className="container mx-auto max-w-7xl py-20">
      <div className="grid gap-20 lg:grid-cols-4">
        {/* Left Column */}
        <div className="space-y-16 lg:col-span-3">
          <Image
            src="/logos/manifest-text-logo-black.svg"
            alt="Logo"
            width={250}
            height={48}
          />
          <div className="text-xl font-normal text-black">
            <PortableText value={settings.about} />
          </div>
          <div className="flex items-center gap-4">
            {settings.instagram &&
              renderSocialLink("instagram", settings.instagram)}
            {settings.email && renderSocialLink("email", settings.email)}
          </div>
        </div>
        <div className="h-96 lg:h-auto"></div>
      </div>
    </div>
  );
}
