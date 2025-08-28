import { axiosClient } from "@/lib/api/axiosClient";
import { SongType } from "@/types/SongType";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

async function fetchData(songId: number) {
  try {
    const res = await axiosClient.get(`/track/${songId}`);
    return res.data;
  } catch (err: any) {
    throw err;
  }
}

export default function useSong(songId: number): UseQueryResult<SongType> {
  return useQuery({
    queryKey: [`song${songId}`],
    queryFn: () => fetchData(songId),
  });
}
