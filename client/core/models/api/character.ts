import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EntityBase } from "../entity-base";
import { Campaign } from "./campaign";
import { Session } from "./session";


export interface Character extends EntityBase {
    campaignId: number;
    eventId?: number;
    sessionId?: number;
    playerName: string;
    firstname: string;
    lastname: string;
    class: string;
    race: string;

    campaign: Campaign;
    event?: Event;
    session?: Session;
}

export const GenerateCharacterForm =  (character: Character, fb: FormBuilder): FormGroup => 
    fb.group({
      campaignId: [character.campaignId, Validators.required],
      eventId: [character.eventId],
      sessionId: [character.sessionId],
      playerName: [character.playerName],
      firstname: [character.firstname],
      lastname: [character.lastname],
      class: [character.class],
      race: [character.race]
    })