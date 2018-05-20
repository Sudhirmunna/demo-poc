import {Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/** @title Simple form field */
@Component({
  selector: 'app-form-fields',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css']
})
export class FormFieldComponent {
  constructor(private route: ActivatedRoute,
    private router: Router) {
  }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  login() {
    this.router.navigate(['/home']);
  }
}
