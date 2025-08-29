import { SongType } from "@/types/SongType";

export default function handleIsSongLoved(list: SongType[], id: number) {
  if (!list && !id) throw " An error occurred";
  const isLoved = list.find((song) => song.id == id);
  return isLoved ? true : false;
}
