import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';

import {
    Session
} from '../../models';

import { SessionApi } from '../../apis';

@Component({
    selector: 'session-display',
    templateUrl: 'session-display.component.html',
    providers: [SessionApi]
})
export class SessionDisplayComponent implements OnChanges {
    @Input() session: Session;

    totalDuration = 0;
    constructor(
        private sessionApi: SessionApi
    ) { }

    async ngOnChanges(changes: SimpleChanges) {
        if (changes.session)
            this.totalDuration = await this.sessionApi.getDuration(this.session.id);
    }
}