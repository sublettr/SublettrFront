import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AllMaterialModulesModule } from './all-material.module';
import {AllPrimeNGModulesModule} from "./all-primeng.module";
import { RouterModule, Routes } from '@angular/router';
import {ChipsModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {LandingComponent} from './landing/landing.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { ViewSubleaseComponent } from './view-sublease/view-sublease.component';
import {UserService} from "./_services/user.service";
import {AuthenticationService} from "./_services/auth.service";
import {SubleaseService} from "./_services/sublet.service";
import {ProfileComponent, UpdateProfileDialog} from './profile/profile.component';
import {LoginDialog} from "./_classes/login";
import {RegisterDialog} from "./_classes/register";
import {DataService} from "./_services/DataService";
import {UserTrackingService} from "./_services/UserTrackingService";
import {ImageService} from './_services/image.service';
import {EqualValidator} from "./_directives/EqualValidator";
import { CostPipe } from './_pipes/cost-pipe.pipe';
import { RatingPipe } from './_pipes/rating-pipe.pipe';
import { TagsPipe } from './_pipes/tags.pipe';
import {ShareModule} from 'ng2share/share.module'
import {ShareDialog} from "./_classes/share";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '*', component: LandingComponent },
  { path: 'post', component: PostComponent },
  { path: 'view-sublease/:id', component: ViewSubleaseComponent },
  { path: 'profile/:email', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginDialog,
    RegisterDialog,
    ShareDialog,
    UpdateProfileDialog,
    PostComponent,
    ViewSubleaseComponent,
    ProfileComponent,
    EqualValidator,
    CostPipe,
    RatingPipe,
    TagsPipe
  ],
  entryComponents: [
    LoginDialog,
    RegisterDialog,
    UpdateProfileDialog,
    ShareDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AllMaterialModulesModule,
    AllPrimeNGModulesModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ChipsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  providers: [UserService, AuthenticationService, SubleaseService, DataService, UserService, UserTrackingService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
