import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[validatePassword][formControlName],[validatePassword][formControl],[validatePassword][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordValidator), multi: true }
  ]
})
export class PasswordValidator implements Validator {
  constructor( @Attribute('validatePassword') public validatePassword: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    let v = c.value;

    // control value (e.g. password)
    let e = c.root.get(this.validatePassword);

    // value not equal
    if (e && v !== e.value) return {
      validatePassword: false
    }
    return null;
  }
}
