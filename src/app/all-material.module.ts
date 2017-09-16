import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule
  ],
  exports: [BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
  MdIconModule ],
  declarations: []
})
export class AllMaterialModulesModule { }
