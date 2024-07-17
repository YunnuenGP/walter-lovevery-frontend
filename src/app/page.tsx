"use client";
import { MediaBanner } from "@/app/components/media-banner";
import { useData } from "@/app/hooks/useData";
import { Loading } from "@/app/components/shared";

export default function Home() {
  const { data, isLoading } = useData();

  if (isLoading) {
    return <Loading />;
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
