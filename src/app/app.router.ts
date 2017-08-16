import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';
import { ParadiseComponent } from './paradise/paradise.component';
import { AboutComponent } from './about/about.component';
import { SitesComponent } from './sites/sites.component';
import { AdminComponent } from './admin/admin.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AccountComponent } from './account/account.component';
export const appRouter = [ // 路由模块
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'project',
    component: ProjectComponent
  }, {
    path: 'paradise',
    component: ParadiseComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'sites',
    component: SitesComponent
  } ,
  {
    path: 'admin',
    component: AdminComponent
  } ,
  {
    path: 'account',
    component: AccountComponent
  } ,
  {
    path: 'blogDetail',
    component: BlogDetailComponent
  } ,
  { path: '**', component: HomeComponent}
  // { path: '**', component: PageNotFoundComponent }:通配符路由
  // data属性用来存放于每个具体路由有关的任意信息。该数据可以被任何一个激活路由访问
  // ， 并能用来保存诸如 页标题、面包屑以及其它静态只读数据
];
