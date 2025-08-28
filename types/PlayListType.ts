export interface PlayListType {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  creation_date: string;
  picture_type: string;
  user: {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  };
  type: string;
}
