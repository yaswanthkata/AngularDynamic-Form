import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Attribute} from '../models/attribute';


@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  dynamicForm: FormGroup;
  attributesList: Attribute[] = [];
  constructor() {}

  ngOnInit() {
    this.attributesList = [
      {
        name: 'Firstname',
        dataType: 'text',
        options: null,
        validations: ['required'],
        value: ''
      },
      {
        name: 'LastName',
        dataType: 'text',
        options: null,
        validations: null,
        value: ''
      },
      {
        name: 'Title',
        dataType: 'select',
        options: ['Mr.', 'Mrs.', 'Other'],
        validations: null,
        value: ''
      },
      {
        name: 'DateOfBirth',
        dataType: 'date',
        options: null,
        validations: null,
        value: ''
      }
    ];
    // setup the form
    const formGroup = {};
    for (const prop of this.attributesList) {
      formGroup[prop.name] = new FormControl(
          prop.value || '', this.mapValidators(prop.validations));
    }

    this.dynamicForm = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of validators) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    console.log(form);
  }
}
