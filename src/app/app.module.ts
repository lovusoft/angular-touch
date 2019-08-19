import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
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
import {ItemComponent} from './item/item.component';
import {FooterComponent} from './footer/footer.component';
import {DrawerComponent} from './drawer/drawer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {httpInterceptorProviders} from './http-interceptors';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    JoinComponent,
    SchoolComponent,
    HomeComponent,
    HotComponent,
    RoastComponent,
    LearnComponent,
    FindComponent,
    TogetherComponent,
    MindComponent,
    SecretComponent,
    ItemComponent,
    FooterComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
