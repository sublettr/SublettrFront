import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule, MultiSelectModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";
import {SliderModule} from "primeng/components/slider/slider";
import {RatingModule} from "primeng/components/rating/rating";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";

@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    RatingModule,
    ConfirmDialogModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    RatingModule,
    ConfirmDialogModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
