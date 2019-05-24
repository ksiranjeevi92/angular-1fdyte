import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NgxPrintModule} from 'ngx-print';
import {BarCodePrintComponent} from './barcode/barcode.print.component';

@NgModule({
  imports:      [ 
    BrowserAnimationsModule,
     NgxPrintModule,
      NgxBarcodeModule,
       BrowserModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule
         ],
  declarations: [ BarCodePrintComponent, AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
