import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from '../common/common.interface';

@Component({
  selector: 'app-walkin-form',
  templateUrl: './walkin-form.component.html',
  styleUrls: ['./walkin-form.component.css']
})
export class WalkinFormComponent implements OnInit {
  public myForm: FormGroup; // our form model

  // using form builder to simplify syntax
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([this.initAddress()])
    });
  }
  initAddress() {
    // initialize our address
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save(model: User) {
    // call API to save user
    console.log(model);
  }
}
