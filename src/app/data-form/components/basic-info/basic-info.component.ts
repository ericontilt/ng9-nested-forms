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
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BasicInfoComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: BasicInfoComponent,
      multi: true
    }
  ]
})
export class BasicInfoComponent implements OnInit, ControlValueAccessor, Validator  {
  basicInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const fb = this.formBuilder;
    this.basicInfoForm = fb.group({
      email: fb.control('', [Validators.email])
    });
  }

  onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.basicInfoForm.setValue(val, {emitEvent: false});
    }
  }

  registerOnChange(fn: any): void {
    this.basicInfoForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null{
    return this.basicInfoForm.valid ? null : { invalidForm: {valid: false, message: 'Basic fields are invalid'}};
  }
}
