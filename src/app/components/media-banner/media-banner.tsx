import Image from "next/image";

export const MediaBanner = () => {
  return (
    <article className="flex h-[150vw] w-full flex-col-reverse tablet:h-[45.5vw] tablet:flex-row-reverse">
      <header className="flex flex-1 flex-col items-center justify-center bg-red-200">
        <h4>Top Header</h4>
        <h1 className="hidden tablet:block">Main Header H1</h1>
        <h2 className="tablet:hidden">Main Header H2</h2>
        <button
          type="button"
          className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Default
        </button>
      </header>
      <div className="flex-[1.7] tablet:flex-1">
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
