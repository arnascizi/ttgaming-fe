import {BoardGame} from "./board-game";

export interface UserDetails {
  id?: number;
  username?: string | undefined;
  password? : string | undefined;
  email?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
  userCollection: BoardGame[];
  userWishlist: BoardGame[];
  token?: string;
}
