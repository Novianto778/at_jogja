"use client";

import { useMediaQuery } from "@uidotdev/usehooks";

export default function useDevice() {
  const isSmallDevice = useMediaQuery("(max-width: 640px)");
  const isMediumDevice = useMediaQuery("(max-width: 768px)");
  const isLargeDevice = useMediaQuery("(max-width: 1024px)");
  return { isSmallDevice, isMediumDevice, isLargeDevice };
}
