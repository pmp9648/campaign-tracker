import { Event } from "./event";
import { EntityBase } from "../entity-base";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface EventType extends EntityBase {
    type: string;
    description: string;

    events: Event[];
}

export const GenerateEventTypeForm = (eventType: EventType, fb: FormBuilder): FormGroup =>
    fb.group({
        type: [eventType.type, Validators.required],
        description: [eventType.description]
    })