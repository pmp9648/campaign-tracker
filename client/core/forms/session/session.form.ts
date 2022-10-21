import {
    Component,
    Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CampaignApi } from '../../apis'

@Component({
    selector: 'session-form',
    templateUrl: 'session.form.html',
    providers: [CampaignApi]
})
export class SessionForm {
    @Input() form: FormGroup;

    get title() { return this.form?.get('title') }
    get sessionDate() { return this.form?.get('sessionDate') }
    get url() { return this.form?.get('url') }
    get summary() { return this.form?.get('summary') }

    constructor(
        public campaignApi: CampaignApi
    ) { }

}