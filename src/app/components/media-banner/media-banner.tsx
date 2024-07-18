import { BannerContent } from "./banner-content";
import { BannerImage } from "./banner-image";
import { MediaBannerComposition, MediaBannerProps } from "./types";

const MediaBanner: React.FC<MediaBannerProps> & MediaBannerComposition = ({
  orientation: position = "left",
  children,
}) => {
  const flexRowPosition =
    position === "left" ? "tablet:flex-row-reverse" : "tablet:flex-row";

  return (
    <article
      className={`flex h-[150vw] flex-col-reverse items-center tablet:h-[45.5vw] ${flexRowPosition}`}
    >
      {children}
    </article>
  );
};

MediaBanner.Image = BannerImage;
MediaBanner.Content = BannerContent;

export { MediaBanner };
