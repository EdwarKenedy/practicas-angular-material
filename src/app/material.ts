import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [MatInputModule, MatFormFieldModule, MatAutocompleteModule],
    exports: [MatInputModule, MatFormFieldModule, MatAutocompleteModule]
})

export class Material {}
