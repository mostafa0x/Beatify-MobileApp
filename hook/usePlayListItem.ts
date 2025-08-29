import { axiosClient } from "@/lib/api/axiosClient";
import { PlayListItemType } from "@/types/PlayListType";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

async function fetchData(playlistId: number) {
  try {
    const res = await axiosClient.get(`/playlist/${playlistId}`);

    return res.data;
  } catch (err: any) {
    throw err ?? " An error occurred";
  }
}

export default function usePlayListItem(
  playListId: number
): UseQueryResult<PlayListItemType> {
  return useQuery({
    queryKey: [`playListItem${playListId}`],
    queryFn: () => fetchData(playListId),
  });
}
