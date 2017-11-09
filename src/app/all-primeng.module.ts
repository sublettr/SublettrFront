import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";
import {SliderModule} from "primeng/components/slider/slider";


@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
