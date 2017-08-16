import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { environment } from './environments/environment';
import 'reflect-metadata';
if (environment.production) {
    enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main-aot.js.map