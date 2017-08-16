import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ParadiseComponent } from './paradise/paradise.component';
import { AboutComponent } from './about/about.component';
import { SitesComponent } from './sites/sites.component';

import {RouterModule} from '@angular/router';
import {appRouter} from './app.router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AccountComponent } from './account/account.component';

import { AccountService } from './account/account.service';
@NgModule({
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
    BlogDetailComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [{provide: LocationStrategy, // 配置注入器
    useClass: HashLocationStrategy
  }, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
