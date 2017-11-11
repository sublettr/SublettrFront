import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule, MultiSelectModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";
import {SliderModule} from "primeng/components/slider/slider";
import {RatingModule} from "primeng/components/rating/rating";


@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    RatingModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    RatingModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
