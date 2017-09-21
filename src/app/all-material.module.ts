import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdInputModule, MdCardModule,
  MdDialog, MdDialogRef, MD_DIALOG_DATA, MdDialogModule
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
    MdCardModule
  ],
  exports: [BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdDialogModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdCardModule
  ],
  declarations: []
})
export class AllMaterialModulesModule { }
