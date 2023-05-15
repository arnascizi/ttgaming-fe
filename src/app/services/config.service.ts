import { Injectable } from '@angular/core';
import {VERSION} from "@angular/cli";
import {HttpBackend, HttpClient} from "@angular/common/http";

export interface AppConfig {
  apiUrl: string;
  localization: {
    supportedLanguages: string[];
    defaultLanguage: string;
  };
}

export function initializeAppConfig(appConfig: ConfigService) {
  return () => appConfig;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  static config: AppConfig;

  constructor() {
  }

  static get apiUrl(): string {
    return this.config.apiUrl;
  }
}
