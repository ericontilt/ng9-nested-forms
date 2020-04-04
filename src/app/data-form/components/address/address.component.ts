import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors, Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AddressComponent,
      multi: true
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor, Validator {
  addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const fb = this.formBuilder;
    this.addressForm = fb.group({
      street: fb.control('', [Validators.required]),
      city: fb.control('', [Validators.required])
    });
  }

  onTouched: () => void = () => {  };

  writeValue(val: any): void {
    if (val) {
      this.addressForm.setValue(val, {emitEvent: false});
    }
  }

  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.addressForm.valid ? null : { invalidForm: {valid: false, message: 'Address fields are invalid'}};
  }
}
