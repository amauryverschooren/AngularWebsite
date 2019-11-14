import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent
  ],
  exports: [
    AppComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
