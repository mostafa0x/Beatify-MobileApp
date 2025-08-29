import { axiosClient } from "@/lib/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetachData(playListId: number) {
  try {
    const res = await axiosClient.get(`/chart/${playListId}/playlists`);
    return res.data.data;
  } catch (err: any) {
    console.log(err);

    throw err ?? "Error";
  }
}

export default function usePlayListById(playListId: number) {
  return useQuery({
    queryKey: [`playList${playListId}`],
    queryFn: () => fetachData(playListId),
  });
}
