import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

interface SocialLinkProps {
  type: "instagram" | "email";
  url: string;
  color?: "black" | "white";
  round?: boolean;
}

const SocialLink = ({ type, url, color = "white", round = false }: SocialLinkProps) => {
  const iconClass = color === "black" ? "text-black" : "text-white";
  const iconShape = round === true ? "rounded-full border border-black/30 p-2 hover:bg-black/60" : "rounded-md p-1 hover:bg-black/10";

  return (
    <Link href={type === "instagram" ? url : `mailto:${url}`} className={`${iconShape} transition-colors  ${iconClass}`} target="_blank" rel="noopener noreferrer">
      {type === "instagram" ? <Instagram className="h-8 w-8" /> : <Mail className="h-8 w-8" />}
      <span className="sr-only">{type === "instagram" ? "Instagram" : "Email"}</span>
    </Link>
  );
};

export default SocialLink;