import {UserView} from "./user-view";

export interface Review {
  id: number;
  content: string;
  rating: number;
  createdAt: Date;
  user: UserView;
}
