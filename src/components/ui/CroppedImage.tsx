import Image from "next/image";
import type { CSSProperties } from "react";

/** Figma image-fill crop: the image's box relative to its frame (percentages or px). */
export type Crop = Pick<CSSProperties, "left" | "top" | "width" | "height">;

type CroppedImageProps = {
  src: string;
  alt: string;
  /** Rendered width hint for next/image, e.g. "356px". */
  sizes: string;
  /** Omit to get `object-cover` (Figma "Fill"). */
  crop?: Crop;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** A clipping frame with an image inside, mirroring Figma's frame + image-fill model. Callers set `relative` or `absolute`. */
export function CroppedImage({
  src,
  alt,
  sizes,
  crop,
  priority,
  className = "",
  style,
}: CroppedImageProps) {
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      {crop ? (
        <div className="absolute" style={crop}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="max-w-none" />
        </div>
      ) : (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      )}
    </div>
  );
}
