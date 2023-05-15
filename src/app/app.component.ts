import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {take, tap} from "rxjs";

// import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ttgaming-fe';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  // private AppConfigService: any;

  // constructor(private translateService: TranslateService) {
  //   translateService.addLangs(this.AppConfigService.config.localization.supportedLanguages);
  //
  //   const localStoreLang = localStorage.getItem('user_locale');
  //   if (localStoreLang) {
  //     translateService.setDefaultLang(localStoreLang);
  //     translateService.use(localStoreLang);
  //   } else {
  //     translateService.setDefaultLang(this.AppConfigService.config.localization.defaultLanguage);
  //     translateService.use(this.AppConfigService.config.localization.defaultLanguage);
  //   }
  // }
}
