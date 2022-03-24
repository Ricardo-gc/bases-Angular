import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heoresModule } from './heores/heores.module';
import { contadoModule } from './contador/contador.module';
import { BleachModule } from './bleach/bleach.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    heoresModule,
    contadoModule,
    BleachModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
