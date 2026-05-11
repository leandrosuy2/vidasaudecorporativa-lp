import { SafeImg } from "@/components/landing/SafeImg";
import { LANDING_IMG, LANDING_IMG_FALLBACK, type LandingImgKey } from "@/lib/landingMedia";
import type { ComponentProps } from "react";

type SafeProps = Omit<ComponentProps<typeof SafeImg>, "src" | "fallbackSrc">;

export function LandingImg({ name, ...props }: SafeProps & { name: LandingImgKey }) {
  return <SafeImg src={LANDING_IMG[name]} fallbackSrc={LANDING_IMG_FALLBACK[name]} {...props} />;
}
