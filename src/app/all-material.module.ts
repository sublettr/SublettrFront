import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule, MdCheckboxModule],
  exports: [BrowserAnimationsModule, MdButtonModule, MdCheckboxModule],
})

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule
  ],
  exports: [MdButtonModule, MdCheckboxModule],
  declarations: []
})
export class AllMaterialModulesModule { }
