import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardGamesComponent} from "./pages/game/board-games/board-games.component";
import {BoardGameInfoComponent} from "./pages/game/board-game-info/board-game-info.component";
import {NewBoardGameComponent} from "./pages/game/new-board-game/new-board-game.component";
import {HomeComponent} from "./pages/layout/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {UserMenuComponent} from "./pages/user/user-menu/user-menu.component";
import {AuthGuard} from "./shared/helper/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'board', component: BoardGamesComponent, canActivate: [AuthGuard]},
  {path: 'board/game/:id', component: BoardGameInfoComponent, canActivate: [AuthGuard]},
  {path: 'board/new', component: NewBoardGameComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserMenuComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
