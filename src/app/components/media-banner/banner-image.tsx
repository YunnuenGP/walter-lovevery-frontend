import { FiImage } from "react-icons/fi";
import Image from "next/image";
import { BannerImageProps } from "./types";

export const BannerImage: React.FC<BannerImageProps> = ({
  src,
  alt = "",
  caption = "",
  ...props
}) => {
  return (
    <section className="h-full flex-[1.7] tablet:flex-1">
      <Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        width={0}
        height={0}
        sizes="100%"
        aria-label={caption}
        priority
        {...props}
      />
    </section>
  );
};

/*
  TODO: Adding FallbackImage as Error Boundary
*/
const FallbackImage: React.FC = () => {
  return (
    <div
      aria-label="Image not found"
      role="img"
      className="flex h-full flex-[1.7] flex-col items-center justify-center capitalize tablet:flex-1"
    >
      <FiImage className="h-20 w-20" />
      <h2>Image not found</h2>
    </div>
  );
};
