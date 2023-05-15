import {BoardGame} from "./board-game";

export interface UserDetails {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  userCollection: BoardGame[];
  userWishlist: BoardGame[];
  token?: string;
}
