import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('group') public addressForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
