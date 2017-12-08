import { NgModule } from '@angular/core';
import {CalendarModule, DialogModule, FileUploadModule, MultiSelectModule} from "primeng/primeng";
import {SidebarModule} from "primeng/components/sidebar/sidebar";
import {SliderModule} from "primeng/components/slider/slider";
import {RatingModule} from "primeng/components/rating/rating";
import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {GrowlModule} from "primeng/components/growl/growl";
import {ProgressSpinnerModule} from "primeng/components/progressspinner/progressspinner";

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
    GrowlModule,
    ProgressSpinnerModule
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
    GrowlModule,
    ProgressSpinnerModule
  ],
  declarations: []
})
export class AllPrimeNGModulesModule { }
