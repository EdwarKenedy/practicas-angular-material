import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { Material } from './material';
import { SimpleAutocompleteComponent } from './components/autocomplete/simple-autocomplete/simple-autocomplete.component';
import { CustomFilterComponent } from './components/autocomplete/custom-filter/custom-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SimpleAutocompleteComponent,
    CustomFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
