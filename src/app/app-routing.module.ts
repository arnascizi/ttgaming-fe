import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardGamesComponent} from "./game/board-games/board-games.component";
import {BoardGameInfoComponent} from "./game/board-game-info/board-game-info.component";
import {NewBoardGameComponent} from "./game/new-board-game/new-board-game.component";
import {HomeComponent} from "./layout/home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {UserMenuComponent} from "./user/user-menu/user-menu.component";
import {AuthGuard} from "./common/helper/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'board', component: BoardGamesComponent, canActivate: [AuthGuard]},
  {path: 'board/game/:id', component: BoardGameInfoComponent, canActivate: [AuthGuard]},
  {path: 'board/new', component: NewBoardGameComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserMenuComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
