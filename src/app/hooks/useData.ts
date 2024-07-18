import { useEffect, useState } from "react";
import { getMediaBannerData } from "@/app/actions";
import { MediaBannerData } from "./types";

export function useMediaBanner() {
  const [data, setData] = useState<MediaBannerData>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        const mock_data = await getMediaBannerData();
        setData(mock_data as MediaBannerData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
