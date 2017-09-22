import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {LandingComponent, LoginDialog} from './landing/landing.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '*', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginDialog,
    RegisterComponent
  ],
  entryComponents: [
    LoginDialog
  ],
  imports: [
    BrowserModule,
    AllMaterialModulesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
