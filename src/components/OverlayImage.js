import { cn } from "@/utils/lib";
import Image from "next/image";
import React from "react";

const OverlayImage = ({
  className,
  overlay = true,
  overlayClassname,
  wrapperClassName,
  ...props
}) => {
  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        alt="Overlay Image"
        className={cn("w-full h-full object-cover", className)}
        {...props}
      />
      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black bg-opacity-30",
            overlayClassname
          )}
        ></div>
      )}
    </div>
  );
};

export default OverlayImage;
