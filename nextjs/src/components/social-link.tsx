import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

interface SocialLinkProps {
  type: "instagram" | "email"; // Type to specify which link to show
  url: string;
  color?: "black" | "white"; // Optional color prop
}

const SocialLink = ({ type, url, color = "white" }: SocialLinkProps) => {
  const iconClass = color === "black" ? "text-black" : "text-white";

  return (
    <Link
      href={type === "instagram" ? url : `mailto:${url}`}
      className={`rounded-full border border-black/20 p-2 transition-colors hover:bg-black/5 ${iconClass}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {type === "instagram" ? (
        <Instagram className="h-8 w-8" />
      ) : (
        <Mail className="h-8 w-8" />
      )}
      <span className="sr-only">
        {type === "instagram" ? "Instagram" : "Email"}
      </span>
    </Link>
  );
};

export default SocialLink;
