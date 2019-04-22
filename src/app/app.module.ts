import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponent } from './counter-detail/counter-detail.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponent,
    SuperCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
