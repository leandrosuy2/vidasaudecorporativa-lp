import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SafeImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
  /** Se a URL principal falhar, tenta esta (ex.: Unsplash). */
  fallbackSrc?: string;
};

export function SafeImg({
  className,
  alt,
  fallbackClassName,
  fallbackSrc,
  onError,
  src,
  ...rest
}: SafeImgProps) {
  const [stage, setStage] = useState<"primary" | "fallback" | "failed">("primary");

  if (stage === "failed") {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-[#1a1b22] to-[#0e0f14] text-center text-xs text-white/40 ring-1 ring-inset ring-white/10",
          className,
          fallbackClassName,
        )}
        role="img"
        aria-label={alt}
      />
    );
  }

  const currentSrc = stage === "primary" ? src : fallbackSrc;

  if (!currentSrc) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-[#1a1b22] to-[#0e0f14] text-center text-xs text-white/40 ring-1 ring-inset ring-white/10",
          className,
          fallbackClassName,
        )}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      alt={alt}
      src={currentSrc}
      className={className}
      onError={(e) => {
        if (stage === "primary" && fallbackSrc) {
          setStage("fallback");
        } else {
          setStage("failed");
        }
        onError?.(e);
      }}
      {...rest}
    />
  );
}
