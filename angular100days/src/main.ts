// Là 1 ts Module, tập hợp các Module khác nhau
// là file đầu tiên chạy khi khởi động 1 dự án angular.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // khởi động AppModule
  .catch(err => console.error(err));
