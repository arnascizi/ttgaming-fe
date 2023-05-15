import {Expansion} from "./expansion";
import {Review} from "./review";
import {Category} from "./category";
import {Designer} from "./designer";

export interface BoardGame {
  id: number;
  name: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  duration: string;
  imgUrl: string;
  releaseYear: number;
  rating: number;
  expansions: Expansion[];
  reviews: Review[];
  categories: Category[];
  designers: Designer[];
}
