import { useEffect, useState } from "react";
import { getMediaBannerData } from "@/app/actions";
import { MockData } from "./types";

export function useData() {
  const [data, setData] = useState<MockData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const mock_data = (await getMediaBannerData()) as MockData;
      setData(mock_data);
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    data,
    error: false,
    isLoading,
  };
}
