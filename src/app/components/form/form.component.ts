import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    { name: 'Mary' },
    { name: 'Shelley' },
    { name: 'igor' }
  ];
  filteredOptions: Observable<string[] | User[]>;

  constructor(private fb: FormBuilder) { }

  formTest = this.fb.group({
    firstName: ['', [Validators.required]]
  });

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => {
          console.log(value);
          return typeof value === 'string' ? value : value.name;
        }),
        map(name => {
          console.log(name);
          console.log(this.options.slice());
          return name ? this._filter(name) : this.options.slice();
        })
      );
  }

  displayFn(user?: User): string | undefined {
    console.log('displayFn', user);
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
