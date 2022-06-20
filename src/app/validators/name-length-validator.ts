import { AbstractControl } from "@angular/forms";

export default function validateNameLength(control: AbstractControl) {
    if (!control.value) return { nameLengthInvalid: true };
    if (control.value.length < 5) return { nameLengthInvalid: true };

    return null;
}
