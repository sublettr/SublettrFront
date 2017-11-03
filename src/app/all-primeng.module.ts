import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";


@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
