import { axiosClient } from "@/lib/api/axiosClient";
import { TrackType } from "@/types/PlayListType";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

async function fetchData(q: string) {
  try {
    const res = await axiosClient.get(`/search?q=${q}`);
    return res.data.data;
  } catch (err: any) {
    throw err ?? " An error occurred";
  }
}

export default function useSearch(q: string): UseQueryResult<TrackType[]> {
  return useQuery({
    queryKey: [`q${q}`],
    queryFn: () => fetchData(q),
  });
}
