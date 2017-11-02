import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";


@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
