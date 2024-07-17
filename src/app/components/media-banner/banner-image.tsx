import { ImageMetadata } from "@/app/hooks/types";
import { FiImage } from "react-icons/fi";
import Image from "next/image";

export const BannerImage: React.FC<{ imageInfo?: ImageMetadata }> = ({
  imageInfo,
}) => {
  if (!imageInfo) {
    return (
      <div className="flex h-full flex-[1.7] flex-col items-center justify-center capitalize tablet:flex-1">
        <FiImage className="h-20 w-20" />
        <p>no image</p>
      </div>
    );
  }

  return (
    <div
      aria-label={imageInfo.caption || ""}
      className="h-full flex-[1.7] tablet:flex-1"
    >
      <Image
        src={imageInfo.src}
        alt={imageInfo.alt || ""}
        className="h-full w-full object-cover"
        width={0}
        height={0}
        sizes="100%"
        priority
      />
    </div>
  );
};
