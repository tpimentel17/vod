export interface Video {
  _id: string;
  cast: string[];
  rate: number[];
  title: string;
  synopsis: string;
  director: string;
  category: string;
  poster: string;
  streamURL: string;
}

export interface NewVideo {
  cast: string[];
  title: string;
  synopsis: string;
  director: string;
  category: string;
  poster: string;
  streamURL: string;
}
