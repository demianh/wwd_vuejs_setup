export interface IPokemon {
  __v: number;
  _id: string;
  pkdx_id: number;
  national_id: number;
  name: string;
  image_url: string;
  description: string;
  art_url: string;
  types: string[],
  evolutions: {
      level: number,
      method: string,
      to: string,
      _id: string
  }[];
}