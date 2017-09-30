import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdInputModule, MdCardModule,
  MdDialog, MdDialogRef, MD_DIALOG_DATA, MdDialogModule, MdExpansionModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdDialogModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdCardModule,
    MdExpansionModule
  ],
  exports: [BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdDialogModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdCardModule,
    MdExpansionModule
  ],
  declarations: []
})
export class AllMaterialModulesModule { }
