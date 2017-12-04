import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule, MultiSelectModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";
import {SliderModule} from "primeng/components/slider/slider";
import {RatingModule} from "primeng/components/rating/rating";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {GrowlModule} from "primeng/components/growl/growl";

@NgModule({
  imports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    RatingModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    CalendarModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,
    RatingModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
