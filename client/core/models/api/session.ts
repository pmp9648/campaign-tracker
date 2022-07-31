import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EntityBase } from "../entity-base";
import { Campaign } from "./campaign";
import { Character } from "./character";
import { Event } from "./event";

export interface Session extends EntityBase {
    campaignId: number;
    sessionDate: string;
    title: string;
    url: string;
    summary: string;

    campaign: Campaign;
    events: Event[];
    characters: Character[];
}

export const GenerateSessionForm =  (session: Session, fb: FormBuilder): FormGroup => 
    fb.group({
        campaignId: [session.campaignId, Validators.required],
        sessionDate: [session.sessionDate, Validators.required],
        title: [session.title, Validators.required],
        url: [session.url],
        summary: [session.summary]
    })