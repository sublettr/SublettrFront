import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule, MultiSelectModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";
import {SliderModule} from "primeng/components/slider/slider";


@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
