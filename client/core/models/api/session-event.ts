import { EntityBase } from "../entity-base";
import { Session } from "./session";
import { Character } from "./character";
import { Duration } from "./duration";
import { EventType } from "./eventType";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface SessionEvent extends EntityBase {
    index?: number;
    sessionId: number;
    eventTypeId?: number;
    totalDuration?: number;
    title: string;
    notes: string;

    session: Session;
    eventType: EventType;
    characters: Character[];
    durations: Duration[];   
}

export const GenerateEventForm =  (event: SessionEvent, fb: FormBuilder): FormGroup => 
    fb.group({
        id: [event?.id],
        index: [event?.index],
        sessionId: [event?.sessionId, Validators.required],
        eventTypeId: [event?.eventTypeId, Validators.required],
        totalDuration: [event?.totalDuration],
        title: [event?.title, Validators.required],
        notes: [event?.notes]
    })