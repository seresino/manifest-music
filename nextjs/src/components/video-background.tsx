interface BackgroundVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  children?: React.ReactNode;
}

export default function BackgroundVideo({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  children,
}: BackgroundVideoProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <video
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
}
