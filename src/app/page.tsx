"use client";
import { MediaBanner } from "@/app/components/media-banner";
import { useMediaBanner } from "@/app/hooks/useData";
import { Loading } from "@/app/components/shared";

export default function Home() {
  const { data, error, isLoading } = useMediaBanner();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No data...</p>;
  }

  return (
    <section className="flex flex-1 flex-col">
      <MediaBanner
        mediaBannerData={data.mediaBanner}
        position={data.mediaBanner.orientation}
      />
    </section>
  );
}
