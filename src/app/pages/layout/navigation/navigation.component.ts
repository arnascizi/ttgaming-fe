import { Component } from '@angular/core';
import {UserDetails} from "../../../interfaces/user-details";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  user?: UserDetails | null;
  showFiller = false;
  isDarkTheme: boolean = false;

  constructor(private auth: AuthenticationService) {
    this.auth.user.subscribe(u => this.user = u);
  }

  logout() {
    this.auth.logout();
  }

  changeTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
