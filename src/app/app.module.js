var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ParadiseComponent } from './paradise/paradise.component';
import { AboutComponent } from './about/about.component';
import { SitesComponent } from './sites/sites.component';
import { RouterModule } from '@angular/router';
import { appRouter } from './app.router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            IndexComponent,
            HomeComponent,
            BlogComponent,
            ProjectComponent,
            ParadiseComponent,
            AboutComponent,
            SitesComponent,
            AdminComponent,
            BlogDetailComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot(appRouter)
        ],
        providers: [{ provide: LocationStrategy,
                useClass: HashLocationStrategy
            }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map