import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EntityBase } from "../entity-base"
import { SessionEvent } from "./session-event";

export interface Duration extends EntityBase {
    sessionEventId: number;
    minutes: number;

    sessionEvent: SessionEvent;
}

export const GenerateDurationForm = (duration: Duration, fb: FormBuilder): FormGroup =>
 fb.group({
    eventId: [duration.sessionEventId, Validators.required],
    minutes: [duration.minutes, Validators.required]
 })