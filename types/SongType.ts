export interface SongType {
  album: {
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
    id: number;
    link: string;
    md5_image: string;
    release_date: string;
    title: string;
    tracklist: string;
    type: string;
  };
  artist: {
    id: number;
    link: string;
    name: string;
    picture: string;
    picture_big: string;
    picture_medium: string;
    picture_small: string;
    picture_xl: string;
    radio: true;
    share: string;
    tracklist: string;
    type: string;
  };
  bpm: number;
  contributors: contributor[];
  disk_number: number;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  gain: number;
  id: number;
  isrc: string;
  link: string;
  preview: string;
  rank: string;
  readable: boolean;
  release_date: string;
  share: string;
  title: string;
  title_short: string;
  title_version: string;
  track_position: number;
  track_token: string;
  type: string;
}

export interface contributor {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: true;
  role: string;
  share: string;
  tracklist: string;
  type: string;
}
