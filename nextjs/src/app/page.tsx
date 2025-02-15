import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";
import VideoBackground from "@/components/video-background";
import SocialLink from "@/components/social-link";
import { urlFor } from "@/sanity/image";

const SETTINGS_QUERY = `*[_type == "settings"][0] { instagram, email, logo4 }`;

export default async function LandingPage() {
  const settings = await client.fetch(SETTINGS_QUERY);

  const renderSocialLink = (type: "instagram" | "email", url: string) => <SocialLink type={type} url={url} round={true} />;

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 flex h-full flex-col">
        <div className="absolute right-8 top-8 flex items-center gap-4">
          {settings.instagram && renderSocialLink("instagram", settings.instagram)}
          {settings.email && renderSocialLink("email", settings.email)}
        </div>
        <div className="flex h-full flex-col items-center justify-center px-4">
          <Link href="/artists" className="group">
            {settings.logo4 ? (
              <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
                <Image src={urlFor(settings.logo4).url()} alt="Logo" fill sizes="(max-width: 768px) 200px, 350px" className="object-contain transition-transform duration-300 group-hover:scale-105" />
              </div>
            ) : (
              <p className="text-white">Logo not available</p>
            )}
          </Link>
        </div>
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-sm text-white/70 md:text-base">Music Publishing • Management • Creative Services</p>
        </div>
      </div>
    </div>
  );
}
