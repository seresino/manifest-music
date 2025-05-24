// nextjs/src/components/social-link.tsx
"use client"; // Ensure this is a client component

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react"; // Import useState and useEffect

export enum SocialLinkType {
  Instagram = "instagram",
  Email = "email",
  Spotify = "spotify",
}

interface SocialLinkProps {
  type: SocialLinkType;
  url: string;
  color?: "black" | "white";
}

// Function to convert web URL to potential native app URL
const getNativeAppUrl = (type: SocialLinkType, url: string): string => {
  if (!url) return "";

  try {
    const urlObject = new URL(url);
    switch (type) {
      case SocialLinkType.Instagram:
        // Attempt to extract the username from the path
        const instagramUsername = urlObject.pathname.split("/")[1];
        if (instagramUsername) {
          return `instagram://user?username=${instagramUsername}`;
        }
        break;
      case SocialLinkType.Spotify:
        // Replace the web domain with the Spotify scheme
        // This is a simple replacement; a more robust solution might parse the path
        // to handle different Spotify URL types (album, playlist, artist)
        return url.replace("https://open.spotify.com", "spotify://");
      case SocialLinkType.Email:
        // mailto links are handled separately and don't use this scheme logic
        return `mailto:${url}`; // Although this case is handled outside this function now
    }
  } catch (error) {
    console.error(`Failed to parse URL ${url}:`, error);
    // Fallback to the original URL if parsing fails
    return url;
  }

  // Fallback to the original URL if native URL can't be constructed for the given type/url format
  return url;
};

const SocialLink = ({ type, url, color = "white" }: SocialLinkProps) => {
  const iconClass = color === "black" ? "text-black" : "text-white";

  // State to track if the device is likely mobile
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen width after the component mounts (client-side)
  useEffect(() => {
    // Only run this check in the browser environment
    if (typeof window !== "undefined") {
      // Simple check based on common mobile breakpoint
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    }
  }, []); // Empty dependency array means this runs once after the initial render

  // Determine the href based on the type and whether it's a mobile device
  let href: string;
  if (type === SocialLinkType.Email) {
    // Email links always use the mailto scheme
    href = `mailto:${url}`;
  } else if (isMobile) {
    // On mobile, try to get the native app URL
    href = getNativeAppUrl(type, url);
  } else {
    // On non-mobile (desktop), use the original web URL
    href = url;
  }

  // Determine the Font Awesome icon object and screen reader text based on the type
  let faIcon; // This will hold the imported icon object (e.g., faInstagram)
  let screenReaderText: string;

  switch (type) {
    case SocialLinkType.Instagram:
      faIcon = faInstagram;
      screenReaderText = "Instagram";
      break;
    case SocialLinkType.Email:
      faIcon = faEnvelope; // Use the envelope icon for email
      screenReaderText = "Email";
      break;
    case SocialLinkType.Spotify:
      faIcon = faSpotify; // Use the spotify icon
      screenReaderText = "Spotify";
      break;
    default:
      console.warn(`Unknown social link type: ${type}`);
      return null;
  }

  // If no valid URL is provided, don't render the link
  if (!url) {
    return null;
  }

  return (
    <Link
      href={href} // Use the determined href (native on mobile, web on desktop)
      className={`transition-colors ${iconClass} hover:opacity-75 inline-block`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Use the FontAwesomeIcon component */}
      <FontAwesomeIcon icon={faIcon} className="h-8 w-8" />{" "}
      {/* Pass the icon object */}
      <span className="sr-only">{screenReaderText}</span>
    </Link>
  );
};

export default SocialLink;
