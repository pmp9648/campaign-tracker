import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { EventTypeApi } from '../../apis';

@Component({
    selector: 'event-form',
    templateUrl: 'event.form.html'
})


export class EventForm implements OnInit {
    @Input() form: FormGroup;

    constructor(
        public typeApi: EventTypeApi
    ) {
    }

    get index() { return this.form?.get('index') }
    get sessionId() { return this.form?.get('sessionId') }
    get eventTypeId() { return this.form?.get('eventTypeId') }
    get totalDuration() { return this.form?.get('totalDuration') }
    get title() { return this.form?.get('title') }
    get notes() { return this.form?.get('notes') }

    async ngOnInit() {
        await this.typeApi.getAllAsync();
        this.typeApi.storeAll();
    }

}