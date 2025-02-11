export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
