import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {LandingComponent, LoginDialog, RegisterDialog} from './landing/landing.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '*', component: LandingComponent },
  { path: 'post', component: PostComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginDialog,
    RegisterDialog,
    PostComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
