import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EntityBase } from "../entity-base";
import { Character } from "./character";
import { Session } from "./session";

export interface Campaign extends EntityBase {
    name: string;
    description: string;
    campaignStart: string;
    campaignEnd: string;
    current: string;
    isComplete: boolean;

    sessions?: Session[];
    characters: Character[];
}

export const GenerateCampaignForm =  (campaign: Campaign, fb: FormBuilder): FormGroup => 
    fb.group({
        id: [campaign?.id],
        name: [campaign?.name, Validators.required],
        description: [campaign?.description],
        campaignStart: [campaign?.campaignStart],
        campaignEnd: [campaign?.campaignEnd],
        current: [campaign?.current],
        isComplete: [campaign?.isComplete]
    })