import { useEffect, useState } from "react";
import { getMediaBannerData } from "@/app/actions";
import { MockData } from "./types";

export function useData() {
  const [data, setData] = useState<MockData>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        const mock_data = (await getMediaBannerData()) as MockData;
        setData(mock_data);
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
