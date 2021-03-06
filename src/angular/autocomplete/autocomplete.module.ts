import { NgModule } from "@angular/core";
import { AutoCompleteComponent } from "./autocomplete.component";
import { CommonModule } from "@angular/common";
import { SearchModule } from "./../search/search.module";
import { AutocompletePipe } from "./autocomplete.pipe";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormElementsModule} from "../form-elements/form-elements.module";

@NgModule({
    declarations: [
        AutoCompleteComponent,
        AutocompletePipe,

    ],
    imports: [
        FormElementsModule,
        BrowserModule,
        BrowserAnimationsModule,
        SearchModule,
        CommonModule
    ],
    exports: [
        AutoCompleteComponent,
        AutocompletePipe
    ]
})
export class AutoCompleteModule {
}
