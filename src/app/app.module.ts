import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LandingComponent, LoginDialog} from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { HttpService } from './utility/http.service';


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
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
