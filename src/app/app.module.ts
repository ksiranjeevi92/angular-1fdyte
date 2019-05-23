import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  imports:      [ NgxPrintModule, NgxBarcodeModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
