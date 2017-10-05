import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {LandingComponent, LoginDialog, RegisterDialog} from './landing/landing.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { ViewSubleaseComponent } from './view-sublease/view-sublease.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '*', component: LandingComponent },
  { path: 'post', component: PostComponent },
  { path: 'view-sublease', component: ViewSubleaseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginDialog,
    RegisterDialog,
    PostComponent,
    ViewSubleaseComponent
  ],
  entryComponents: [
    LoginDialog,
    RegisterDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AllMaterialModulesModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
