import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {LandingComponent, LoginDialog, RegisterDialog} from './landing/landing.component';


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
    AllMaterialModulesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
