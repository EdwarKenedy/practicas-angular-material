import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { SimpleAutocompleteComponent } from './components/autocomplete/simple-autocomplete/simple-autocomplete.component';
import { CustomFilterComponent } from './components/autocomplete/custom-filter/custom-filter.component';

const routes: Routes = [
  { path: 'autocomplete', component: FormComponent},
  { path: 'autocomplete/simple-autocomplete', component: SimpleAutocompleteComponent},
  { path: 'autocomplete/custom-filter', component: CustomFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
