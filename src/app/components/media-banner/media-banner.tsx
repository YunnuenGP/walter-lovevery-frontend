import { BannerInfo } from "./banner-info";
import { BannerImage } from "./banner-image";
import { MediaBannerData } from "@/app/hooks/types";

export const MediaBanner: React.FC<{
  mediaBannerData: MediaBannerData;
  position?: "right" | "left";
}> = ({ mediaBannerData, position = "left" }) => {
  const flexRowPosition =
    position === "left" ? "tablet:flex-row-reverse" : "tablet:flex-row";

  return (
    <article
      className={`flex h-[150vw] flex-col-reverse items-center tablet:h-[45.5vw] ${flexRowPosition}`}
    >
      <BannerInfo banner={mediaBannerData} />
      <BannerImage imageInfo={mediaBannerData.img} />
    </article>
  );
};
