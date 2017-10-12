import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {

} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material";
import {MatButtonModule} from "@angular/material";
import {MatDialogModule} from "@angular/material";
import {MatCheckboxModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import {MatExpansionModule} from "@angular/material";
import {MatListModule} from "@angular/material";
import {MatCardModule} from "@angular/material";
import {MatTooltipModule} from "@angular/material";
import {MatSidenavModule} from "@angular/material";
import {MatIconModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  exports: [BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  declarations: []
})
export class AllMaterialModulesModule { }
