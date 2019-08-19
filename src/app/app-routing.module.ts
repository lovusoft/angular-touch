import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {JoinComponent} from './join/join.component';
import {SchoolComponent} from './school/school.component';
import {HomeComponent} from './home/home.component';
import {HotComponent} from './home/hot/hot.component';
import {RoastComponent} from './home/roast/roast.component';
import {LearnComponent} from './home/learn/learn.component';
import {FindComponent} from './home/find/find.component';
import {TogetherComponent} from './home/together/together.component';
import {MindComponent} from './home/mind/mind.component';
import {SecretComponent} from './home/secret/secret.component';
import {DrawerComponent} from './drawer/drawer.component';

const routes: Routes = [
  {path: '', redirectTo: '/home/hot', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'hot', component: HotComponent},
      {path: 'roast', component: RoastComponent},
      {path: 'learn', component: LearnComponent},
      {path: 'find', component: FindComponent},
      {path: 'together', component: TogetherComponent},
      {path: 'mind', component: MindComponent},
      {path: 'secret', component: SecretComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'drawer', component: DrawerComponent},
  {path: 'join', component: JoinComponent},
  {path: 'school', component: SchoolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
