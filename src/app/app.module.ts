import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
// Angular Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DynamicformComponent} from './dynamicform/dynamicform.component';

@NgModule({
  declarations: [AppComponent, DynamicformComponent],
  imports: [
    BrowserModule, ReactiveFormsModule, MatSelectModule, MatButtonModule,
    MatDatepickerModule, BrowserAnimationsModule, NoopAnimationsModule,
    MatNativeDateModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
