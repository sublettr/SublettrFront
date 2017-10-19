import { NgModule } from '@angular/core';
import {DialogModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";


@NgModule({
  imports: [
    DialogModule,
    SidebarModule
  ],
  exports: [
    DialogModule,
    SidebarModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
