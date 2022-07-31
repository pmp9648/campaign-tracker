import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EntityBase } from "../entity-base"

export interface Duration extends EntityBase {
    eventId: number;
    minutes: number;

    event: Event;
}

export const GenerateDurationForm = (duration: Duration, fb: FormBuilder): FormGroup =>
 fb.group({
    eventId: [duration.eventId, Validators.required],
    minutes: [duration.minutes, Validators.required]
 })