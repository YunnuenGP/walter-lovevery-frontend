import Image from "next/image";

export const MediaBanner = () => {
  return (
    <article className="flex h-[150vw] flex-col-reverse items-center tablet:h-[45.5vw] tablet:flex-row-reverse">
      <header className="flex h-full w-full flex-1 flex-col items-center justify-evenly bg-gray-200 text-center dark:bg-gray-600 tablet:items-start tablet:py-[5vw] tablet:text-start">
        <h4 className="text-xl font-semibold capitalize text-neutral-700 dark:text-neutral-200 tablet:px-[7.5vw] desktop:text-2xl">
          For All their first
        </h4>
        <h1 className="hidden text-3xl font-bold text-neutral-700 dark:text-neutral-200 tablet:block tablet:px-[7.5vw] desktop:text-6xl">
          Joyfull play at every stage, ages 0-4
        </h1>
        <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-200 tablet:hidden tablet:px-[7.5vw]">
          Joyfull play at every stage, ages 0-4
        </h2>
        <div className="w-full px-5 tablet:px-[7.5vw]">
          <button
            type="button"
            className="w-full max-w-[328px] rounded-md bg-sky-700 px-5 py-3 font-light capitalize text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 tablet:max-w-72 tablet:py-5"
          >
            Explore the play kits
          </button>
        </div>
      </header>
      <div
        aria-label="Image for media banner"
        className="h-full flex-[1.7] tablet:flex-1"
      >
        <Image
          src={
            "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png"
          }
          alt={"lovevery photo"}
          className="h-full w-full object-cover"
          width={0}
          height={0}
          sizes="100%"
          priority
        />
      </div>
    </article>
  );
};
