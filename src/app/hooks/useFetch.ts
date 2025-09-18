"use client";
import { useEffect, useState, useCallback } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export const useFetch = <T = any>(url: string | null) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: !!url,
    error: null,
  });

  const fetchData = useCallback(async (simulateFail = false) => {
    if (!url) return;
    setState({ data: null, loading: true, error: null });
    try {
      // to demonstrate intentional error, allow simulateFail to alter url
      const fetchUrl = simulateFail ? url.replace("/posts", "/invalid-posts") : url;
      const res = await fetch(fetchUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setState({ data: json as T, loading: false, error: null });
    } catch (err: any) {
      setState({ data: null, loading: false, error: err.message || "Failed to fetch" });
    }
  }, [url]);

  useEffect(() => { fetchData(false); }, [fetchData]);

  return { ...state, refetch: fetchData };
};
