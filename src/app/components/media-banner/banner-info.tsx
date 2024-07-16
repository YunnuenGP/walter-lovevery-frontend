import { MediaBannerData } from "@/app/hooks/types";
import Link from "next/link";

export const BannerInfo: React.FC<{ banner: MediaBannerData }> = ({
  banner,
}) => {
  return (
    <header className="flex h-full w-full flex-1 flex-col items-center justify-evenly bg-gray-200 text-center dark:bg-gray-600 tablet:items-start tablet:py-[5vw] tablet:text-start">
      <h4 className="text-xl font-semibold capitalize text-neutral-700 dark:text-neutral-200 tablet:px-[7.5vw] desktop:text-2xl">
        {banner.leadingText}
      </h4>
      <h1 className="hidden text-3xl font-bold text-neutral-700 dark:text-neutral-200 tablet:block tablet:px-[7.5vw] desktop:text-6xl">
        {banner.heading}
      </h1>
      <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-200 tablet:hidden tablet:px-[7.5vw]">
        {banner.heading}
      </h2>
      {banner.button ? (
        <div className="flex w-full justify-center px-5 tablet:justify-start tablet:px-[7.5vw]">
          <Link
            href={banner.button.href}
            className="max-w-[328px] flex-1 rounded-md bg-sky-700 px-5 py-3 text-center font-medium capitalize text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 tablet:max-w-72 tablet:py-5"
          >
            {banner.button.text}
          </Link>
        </div>
      ) : null}
    </header>
  );
};
