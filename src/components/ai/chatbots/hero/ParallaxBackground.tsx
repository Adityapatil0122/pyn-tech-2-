interface ParallaxBackgroundProps {
  scrollY: number;
}

export const ParallaxBackground = ({ scrollY }: ParallaxBackgroundProps) => {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pyn-gray via-white to-pyn-lightBlue/10" />
      <div
        className="absolute inset-x-0 top-0 z-0 h-28 border-b border-pyn-blue/10 bg-[linear-gradient(135deg,rgba(14,124,123,0.12)_25%,transparent_25%,transparent_50%,rgba(14,124,123,0.12)_50%,rgba(14,124,123,0.12)_75%,transparent_75%,transparent)] bg-[length:28px_28px] opacity-60"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
    </>
  );
};
