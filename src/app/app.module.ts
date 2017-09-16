import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AllMaterialModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
